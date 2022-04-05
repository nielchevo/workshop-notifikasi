import { Injectable } from '@nestjs/common';
import { OneSignalService } from 'onesignal-api-client-nest';
import { NotificationBySegmentBuilder } from 'onesignal-api-client-core';

@Injectable()
export class OnesignalService {
  constructor(private readonly oneSignalService: OneSignalService) {}

  async createNotificationBySegment(message: string) {
    try {
      const input = new NotificationBySegmentBuilder()
        .setIncludedSegments(['Active Users', 'test_user_email'])
        .email()
        .setEmailSubject('email from workshop-service')
        .setEmailBody(message)
        .build();

      return await this.oneSignalService
        .createNotification(input)
        .then((res) => {
          console.log('SUCCESS CREATE NOTIFICATION: ', res);
          return res;
        })
        .catch((e) => {
          throw e;
        });
    } catch (error) {
      console.error('ERROR CREATE NOTIFICATION', error);
      throw error;
    }
  }
}
