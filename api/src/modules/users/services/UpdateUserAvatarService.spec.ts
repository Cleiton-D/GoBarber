import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import UpdateUserAvatarService from './UpdateUserAvatarService';

let fakeusersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let udpateUserAvatar: UpdateUserAvatarService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeusersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();
    udpateUserAvatar = new UpdateUserAvatarService(
      fakeusersRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to update a user avatar', async () => {
    const user = await fakeusersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await udpateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  it('should not be able to avatar from non existing user', async () => {
    await expect(
      udpateUserAvatar.execute({
        user_id: 'non-existing-user',
        avatarFilename: 'avatar.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delte old avatar when updating new one', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const user = await fakeusersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await udpateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    await udpateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar2.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');
    expect(user.avatar).toBe('avatar2.jpg');
  });
});
