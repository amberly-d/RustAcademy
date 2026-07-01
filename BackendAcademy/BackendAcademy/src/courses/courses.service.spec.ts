import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create() returns the dto with an id', () => {
    const result = service.create({ title: 'Rust Basics', description: 'An intro to Rust programming language.' });
    expect(result).toMatchObject({ title: 'Rust Basics' });
    expect(result.id).toBeDefined();
  });

  it('findAll() returns an array', () => {
    expect(Array.isArray(service.findAll())).toBe(true);
  });

  it('findOne() throws NotFoundException for unknown id', () => {
    expect(() => service.findOne(999)).toThrow(NotFoundException);
  });
});