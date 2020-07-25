import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeCacheProfiler: FakeCacheProvider;
let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppoinments: ListProviderAppointmentsService;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeCacheProfiler = new FakeCacheProvider();
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderAppoinments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProfiler,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    const availability = await listProviderAppoinments.execute({
      provider_id: 'provider',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(availability).toEqual([appointment1, appointment2]);
  });
});
