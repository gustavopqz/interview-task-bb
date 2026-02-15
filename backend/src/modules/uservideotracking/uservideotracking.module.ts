import { Module } from '@nestjs/common';
import { UservideotrackingService } from './uservideotracking.service';
import { UservideotrackingController } from './uservideotracking.controller';

@Module({
  controllers: [UservideotrackingController],
  providers: [UservideotrackingService],
})
export class UservideotrackingModule {}
