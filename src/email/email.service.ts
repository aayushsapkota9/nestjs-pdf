import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { UserUpload } from 'src/user-upload/dtos/user-upload.entity';
import FileInformation from 'src/user-upload/interfaces/fileInfo.interface';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendUserEmail(
    user: UserUpload,
    pdfBuffer: Buffer,
    fileInformation: FileInformation,
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
          filename: `${fileInformation.name}.pdf`,
          content: pdfBuffer,
          encoding: 'base64', // Specify the encoding of the content
        },
      ],
    });
  }
}
