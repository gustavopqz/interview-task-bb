import { PartialType } from '@nestjs/mapped-types';
import { CreateUservideotrackingDto } from './create-uservideotracking.dto';

export class UpdateUservideotrackingDto extends PartialType(CreateUservideotrackingDto) {}
