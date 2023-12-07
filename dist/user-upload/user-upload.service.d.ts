import { EmailService } from 'src/email/email.service';
import { UserUpload } from './dtos/user-upload.entity';
import { HtmlPdfService } from 'src/html-pdf/html-pdf.service';
export declare class UserUploadService {
    private htmlToPdfService;
    private emailService;
    constructor(htmlToPdfService: HtmlPdfService, emailService: EmailService);
    convertAndEmail(user: UserUpload, file: any): Promise<void>;
}
