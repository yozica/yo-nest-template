import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleWare } from './common/middleware/logger.middleware';
import { EmailModule, HelloModule, UserModule } from './modules';
import { escrowMailerModule } from './escrow-modules';

@Module({
  imports: [escrowMailerModule, HelloModule, UserModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      // .exclude({ path: 'hello', method: RequestMethod.GET })
      .forRoutes('hello');
  }
}
