import { Body, Controller, Get, Post } from '@nestjs/common';
import { ICreateDeviceSubscribe } from './app.interfaces';
import { AppService } from './app.service';
import { OnesignalService } from './onesignal/onesignal.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly oneSignalService: OnesignalService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('devices')
  getOneSignalDevices() {
    return this.oneSignalService.getViewDevices();
  }

  @Get('notifications')
  getOneSignalNotifications() {
    return this.oneSignalService.getViewNotifications();
  }

  @Post('create-subscribe')
  async createNewEmailSubscriber(@Body() body: ICreateDeviceSubscribe) {
    try {
      const data: ICreateDeviceSubscribe = {
        ...body,
        app_id: '9462ed27-fa87-429e-95a2-f14466a0078d',
        device_type: body.device_type ? body.device_type : 11,
      };

      return await this.oneSignalService.createNewDeviceSubscriber({ ...data });
    } catch (error) {
      console.error('ERROR CREATE NEW EMAIL SUBSCRIBER');
      throw error;
    }
  }
}
