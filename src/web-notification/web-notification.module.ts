import { Module } from '@nestjs/common';
import { OnesignalModule } from 'src/onesignal/onesignal.module';
import { WebNotificationController } from './web-notification.controller';
import { WebNotificationService } from './web-notification.service';

@Module({
  imports: [OnesignalModule],
  controllers: [WebNotificationController],
  providers: [WebNotificationService],
  exports: [WebNotificationService],
})
export class WebNotificationModule {}
