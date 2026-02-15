import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UservideotrackingService } from './uservideotracking.service';
import { CreateUservideotrackingDto } from './dto/create-uservideotracking.dto';
import { UpdateUservideotrackingDto } from './dto/update-uservideotracking.dto';

@Controller('uservideotracking')
export class UservideotrackingController {
  constructor(private readonly uservideotrackingService: UservideotrackingService) {}

  @Post()
  create(@Body() createUservideotrackingDto: CreateUservideotrackingDto) {
    return this.uservideotrackingService.create(createUservideotrackingDto);
  }

  @Get()
  findAll() {
    return this.uservideotrackingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uservideotrackingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUservideotrackingDto: UpdateUservideotrackingDto) {
    return this.uservideotrackingService.update(+id, updateUservideotrackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uservideotrackingService.remove(+id);
  }
}
