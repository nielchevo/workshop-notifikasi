import { Injectable } from '@nestjs/common';
import { OneSignalService } from 'onesignal-api-client-nest';
import { INotification, NotificationBuilder, NotificationBySegmentBuilder, INotificationFilterUsers } from 'onesignal-api-client-core';

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

  async createWebNotification(message: string) {
    try {
      // const notifOption: INotification = {
      //   isAnyWeb: true,
      //   filters: [{}],
      //   contents: {
      //     en: 'Ini KOnten Buat web notification',
      //   },
      //   included_segments: ['Active Users'],
      //   excluded_segments: [''],
      // };
      // const builder = new NotificationBuilder(notifOption).build();

      const builder = new NotificationBySegmentBuilder()
        .setIncludedSegments(['Active Users'])
        .notification()
        .setContents({
          en: message ? message : 'default message',
        })
        .build();

      return await this.oneSignalService
        .createNotification(builder)
        .then((res) => {
          console.log('SUCCESS CREATE WEB NOTIFICATION: ', res);
          return res;
        })
        .catch((e) => {
          throw e;
        });
    } catch (error) {
      console.error('ERROR CREATE WEB NOTIFICATION', error);
      throw error;
    }
  }

  async getViewNotifications() {
    try {
      return await this.oneSignalService
        .viewNotifications({ kind: null, limit: 100, offset: 0 })
        .then((res) => {
          console.log('SUCCESS GET NOTIFICATION', res);
          return res;
        })
        .catch((e) => {
          throw e;
        });
    } catch (error) {
      console.log('ERROR VIEW ONS APPS', error);
      throw error;
    }
  }

  async getViewDevices() {
    try {
      return await this.oneSignalService
        .viewDevices()
        .then((res) => {
          console.log('SUCCESS GET DEVICES', res);
          return res;
        })
        .catch((e) => {
          console.error('ERROR GET DEVICES', e);
          throw e;
        });
    } catch (error) {
      console.error('ERROR VIEW ONS DEVICES', error);
      throw error;
    }
  }
}
