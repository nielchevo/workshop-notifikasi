import { Module } from '@nestjs/common';
import { OneSignalModule } from 'onesignal-api-client-nest';
import { OnesignalService } from './onesignal.service';

@Module({
  imports: [
    OneSignalModule.forRoot({
      appId: '9462ed27-fa87-429e-95a2-f14466a0078d',
      restApiKey: 'NzBiZGUzMjQtY2YyNC00Y2VlLWFkNzEtN2VjYTkzYWFjZWU4',
    }),
  ],
  providers: [OnesignalService],
  exports: [OnesignalService],
})
export class OnesignalModule {}
