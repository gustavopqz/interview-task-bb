import { Test, TestingModule } from '@nestjs/testing';
import { UservideotrackingController } from './uservideotracking.controller';
import { UservideotrackingService } from './uservideotracking.service';

describe('UservideotrackingController', () => {
  let controller: UservideotrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UservideotrackingController],
      providers: [UservideotrackingService],
    }).compile();

    controller = module.get<UservideotrackingController>(UservideotrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
