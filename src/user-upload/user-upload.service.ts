import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { UserUpload } from './dtos/user-upload.entity';
import { HtmlPdfService } from 'src/html-pdf/html-pdf.service';

@Injectable()
export class UserUploadService {
  constructor(
    private htmlToPdfService: HtmlPdfService,
    private emailService: EmailService,
  ) {}

  async convertAndEmail(user: UserUpload, file) {
    const { pdfBuffer, path } =
      await this.htmlToPdfService.convertHtmlToPdf(file);
    const fileInformation = {
      name: file.originalname,
      encoding: file.encoding,
      fileType: file.mimeType,
      size: file.size,
      path: path,
    };
    await this.emailService.sendUserEmail(user, pdfBuffer, fileInformation);
  }
}
