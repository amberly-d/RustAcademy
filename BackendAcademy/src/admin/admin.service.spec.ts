import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    service = new AdminService();
  });

  it('returns a summary payload for admin analytics', async () => {
    const result = await service.getDashboardSummary();

    expect(result).toEqual(
      expect.objectContaining({
        totalUsers: expect.any(Number),
        activeTutors: expect.any(Number),
        totalCourses: expect.any(Number),
        completionRate: expect.any(Number),
      }),
    );
  });
});
