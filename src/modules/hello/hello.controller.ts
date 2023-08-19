import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ResType } from 'src/type';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get()
  getHello(): ResType {
    const res: ResType = {
      code: 0,
      msg: '请求成功',
      data: this.helloService.getHello(),
    };
    return res;
  }
}
