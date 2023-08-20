import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleWare } from './common/middleware/logger.middleware';
import { AuthModule, EmailModule, HelloModule, UserModule } from './modules';
import { escrowMailerModule, escrowTypeOrmModule } from './escrow-modules';

@Module({
  imports: [
    escrowMailerModule,
    escrowTypeOrmModule,
    AuthModule,
    HelloModule,
    UserModule,
    EmailModule,
  ],
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
