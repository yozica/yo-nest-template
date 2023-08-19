import { MiddlewareConsumer, Module } from '@nestjs/common';
import { HelloModule, UserModule } from './modules';
import { LoggerMiddleWare } from './common/middleware/logger.middleware';

@Module({
  imports: [HelloModule, UserModule],
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
