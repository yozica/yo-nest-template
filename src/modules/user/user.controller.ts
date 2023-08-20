import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ResType } from 'src/type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/getAllUsers')
  async getAllUsers(): Promise<ResType> {
    return {
      code: 0,
      msg: '请求成功',
      data: await this.userService.getAllUsers(),
    };
  }

  @Get('getUserById/:id')
  getUserById(@Param() { id }): ResType {
    id = parseInt(id);

    if (id === 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: '请求参数id不能为0',
          error: 'id can not be zero',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      code: 0,
      msg: '请求成功',
      data: null,
    };
  }
}
