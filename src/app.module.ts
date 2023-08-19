import { Module } from '@nestjs/common';
import { HelloModule, UserModule } from './modules';

@Module({
  imports: [HelloModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
