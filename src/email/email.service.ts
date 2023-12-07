import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './../user/user.entity';
import { HtmlPdfService } from 'src/html-pdf/html-pdf.service';

@Injectable()
export class EmailService {
  constructor(
    private mailerService: MailerService,
    private htmlToPdfService: HtmlPdfService,
  ) {}

  async sendUserWelcome(user: User, pdfBuffer: Buffer) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './welcome', // `.ejs`
      context: {
        // filling <%= %> brackets with content
        name: user.email,
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
