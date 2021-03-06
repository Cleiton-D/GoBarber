import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import ShowProfileService from './ShowProfileService';

let fakeusersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeusersRepository = new FakeUsersRepository();
    showProfile = new ShowProfileService(fakeusersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeusersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const profile = await showProfile.execute({ user_id: user.id });

    expect(profile.name).toBe('John Doe');
    expect(profile.email).toBe('johndoe@example.com');
  });

  it('should be able to show the profile from non-existing user', async () => {
    await expect(
      showProfile.execute({
        user_id: 'non-existing-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
