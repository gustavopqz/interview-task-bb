import { Injectable } from '@nestjs/common';
import { CreateUservideotrackingDto } from './dto/create-uservideotracking.dto';
import { UpdateUservideotrackingDto } from './dto/update-uservideotracking.dto';

@Injectable()
export class UservideotrackingService {
  create(createUservideotrackingDto: CreateUservideotrackingDto) {
    return 'This action adds a new uservideotracking';
  }

  findAll() {
    return `This action returns all uservideotracking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uservideotracking`;
  }

  update(id: number, updateUservideotrackingDto: UpdateUservideotrackingDto) {
    return `This action updates a #${id} uservideotracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} uservideotracking`;
  }
}
