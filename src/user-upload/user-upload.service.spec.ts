import { Test, TestingModule } from '@nestjs/testing';
import { UserUploadService } from './user-upload.service';

describe('UserUploadService', () => {
  let service: UserUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserUploadService],
    }).compile();

    service = module.get<UserUploadService>(UserUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
