import { Controller, Get } from '@nestjs/common';
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
}
