/// <reference types="node" />
import { MailerService } from '@nestjs-modules/mailer';
import { UserUpload } from 'src/user-upload/dtos/user-upload.entity';
import FileInformation from 'src/user-upload/interfaces/fileInfo.interface';
export declare class EmailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserEmail(user: UserUpload, pdfBuffer: Buffer, fileInformation: FileInformation): Promise<void>;
}
