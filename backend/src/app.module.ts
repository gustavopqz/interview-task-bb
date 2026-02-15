import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UservideotrackingModule } from './modules/uservideotracking/uservideotracking.module';

@Module({
  imports: [UservideotrackingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
