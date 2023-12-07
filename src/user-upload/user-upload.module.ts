import { Module } from '@nestjs/common';
import { UserUploadService } from './user-upload.service';
import { UserUploadController } from './user-upload.controller';
import { EmailModule } from 'src/email/email.module';
import { HtmlPdfService } from 'src/html-pdf/html-pdf.service';

@Module({
  imports: [EmailModule],
  controllers: [UserUploadController],
  providers: [UserUploadService, HtmlPdfService],
})
export class UserUploadModule {}
