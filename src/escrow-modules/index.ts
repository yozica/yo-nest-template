import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { join } from 'path';

export const escrowMailerModule = MailerModule.forRootAsync({
  useFactory: () => ({
    transport:
      'smtps://lichengmingisme@foxmail.com:vctaagzuogopdfaa@smtp.qq.com',
    defaults: {
      from: 'yozica <lichengmingisme@foxmail.com>',
    },
    template: {
      dir: join(__dirname, '../templates/email'),
      adapter: new PugAdapter(),
      options: {
        strict: true,
      },
    },
  }),
});
