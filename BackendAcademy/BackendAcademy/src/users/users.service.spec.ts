import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create() returns the dto with an id', () => {
    const result = service.create({ name: 'Alice', email: 'alice@example.com', password: 'secret123' });
    expect(result).toMatchObject({ name: 'Alice', email: 'alice@example.com' });
    expect(result.id).toBeDefined();
  });

  it('findAll() returns an array', () => {
    expect(Array.isArray(service.findAll())).toBe(true);
  });

  it('findOne() throws NotFoundException for unknown id', () => {
    expect(() => service.findOne(999)).toThrow(NotFoundException);
  });
});