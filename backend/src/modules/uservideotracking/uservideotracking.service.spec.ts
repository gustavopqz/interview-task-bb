import { Test, TestingModule } from '@nestjs/testing';
import { UservideotrackingService } from './uservideotracking.service';

describe('UservideotrackingService', () => {
  let service: UservideotrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UservideotrackingService],
    }).compile();

    service = module.get<UservideotrackingService>(UservideotrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
