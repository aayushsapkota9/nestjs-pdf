import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { UserUpload } from 'src/user-upload/dtos/user-upload.entity';
import { HtmlPdfService } from 'src/html-pdf/html-pdf.service';

@Injectable()
export class EmailService {
  constructor(
    private mailerService: MailerService,
    private htmlToPdfService: HtmlPdfService,
  ) {}

  async sendUserEmail(
    user: UserUpload,
    pdfBuffer: Buffer,
    fileInformation: Object,
  ) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './welcome', // `.ejs`
      context: {
        // filling <%= %> brackets with content
        name: user.email,
        fileInformation: fileInformation,
      },
      attachments: [
        {
          filename: 'result.pdf',
          content: pdfBuffer,
          encoding: 'base64', // Specify the encoding of the content
        },
      ],
    });
  }
}
