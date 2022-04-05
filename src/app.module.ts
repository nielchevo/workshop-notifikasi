import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OnesignalModule } from './onesignal/onesignal.module';
import { EmailNotificationModule } from './email-notification/email-notification.module';

@Module({
  imports: [OnesignalModule, EmailNotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
