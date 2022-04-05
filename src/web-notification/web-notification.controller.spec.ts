import { Test, TestingModule } from '@nestjs/testing';
import { WebNotificationController } from './web-notification.controller';

describe('WebNotificationController', () => {
  let controller: WebNotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebNotificationController],
    }).compile();

    controller = module.get<WebNotificationController>(WebNotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
