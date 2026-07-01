import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it('updates learner and tutor preferences for a user', async () => {
    const result = await service.updatePreferences('user-1', {
      learnerPreferences: { theme: 'dark' },
      tutorPreferences: { availability: 'weekends' },
    });

    expect(result).toEqual(
      expect.objectContaining({
        userId: 'user-1',
        learnerPreferences: { theme: 'dark' },
        tutorPreferences: { availability: 'weekends' },
      }),
    );
  });
});
