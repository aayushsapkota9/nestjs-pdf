import { Test, TestingModule } from '@nestjs/testing';
import { UserUploadController } from './user-upload.controller';

describe('UserUploadController', () => {
  let controller: UserUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserUploadController],
    }).compile();

    controller = module.get<UserUploadController>(UserUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
