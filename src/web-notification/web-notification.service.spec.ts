import { Test, TestingModule } from '@nestjs/testing';
import { WebNotificationService } from './web-notification.service';

describe('WebNotificationService', () => {
  let service: WebNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebNotificationService],
    }).compile();

    service = module.get<WebNotificationService>(WebNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
