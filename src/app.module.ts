import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OnesignalModule } from './onesignal/onesignal.module';
import { EmailNotificationModule } from './email-notification/email-notification.module';
import { WebNotificationModule } from './web-notification/web-notification.module';

@Module({
  imports: [OnesignalModule, EmailNotificationModule, WebNotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
