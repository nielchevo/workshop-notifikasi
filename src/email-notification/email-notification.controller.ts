import { Body, Controller, Post } from '@nestjs/common';
import { OnesignalService } from 'src/onesignal/onesignal.service';
import { EmailNotificationPayload } from './inteface/email-notification.interface';

@Controller('email')
export class EmailNotificationController {
  constructor(private readonly OneSignalService: OnesignalService) {}

  @Post('/create-notification')
  async pushEmailNotification(@Body() body: EmailNotificationPayload) {
    try {
      const result = await this.OneSignalService.createNotificationBySegment(
        body.message,
      ).catch((error) => {
        throw error;
      });

      return result;
    } catch (error) {
      console.error('ERROR', error);
      throw error;
    }
  }
}
