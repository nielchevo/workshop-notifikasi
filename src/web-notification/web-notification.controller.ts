import { Body, Controller, Post } from '@nestjs/common';
import { OnesignalService } from 'src/onesignal/onesignal.service';
import { IPayload } from './interface/web-notification.interface';

@Controller('web')
export class WebNotificationController {
  constructor(private readonly oneSignalService: OnesignalService) {}

  @Post('create-notification')
  async createWebNotificatiOn(@Body() payload: IPayload) {
    try {
      const { message } = payload;

      return this.oneSignalService.createWebNotification(message);
    } catch (error) {
      console.error('ERROR CREATE WEB NOTIFICATION', error);
      throw error;
    }
  }
}
