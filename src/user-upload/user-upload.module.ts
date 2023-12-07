import { Module } from '@nestjs/common';
import { UserUploadService } from './user-upload.service';
import { UserUploadController } from './user-upload.controller';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [UserUploadController],
  providers: [UserUploadService],
})
export class UserUploadModule {}
