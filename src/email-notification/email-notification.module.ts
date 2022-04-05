import { Module } from '@nestjs/common';
import { OnesignalModule } from 'src/onesignal/onesignal.module';
import { EmailNotificationController } from './email-notification.controller';
import { EmailNotificationService } from './email-notification.service';

@Module({
  imports: [OnesignalModule],
  controllers: [EmailNotificationController],
  providers: [EmailNotificationService],
  exports: [EmailNotificationService],
})
export class EmailNotificationModule {}
