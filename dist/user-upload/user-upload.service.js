"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUploadService = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("../email/email.service");
const html_pdf_service_1 = require("../html-pdf/html-pdf.service");
let UserUploadService = class UserUploadService {
    constructor(htmlToPdfService, emailService) {
        this.htmlToPdfService = htmlToPdfService;
        this.emailService = emailService;
    }
    async convertAndEmail(user, file) {
        const { pdfBuffer, path } = await this.htmlToPdfService.convertHtmlToPdf(file);
        const fileInformation = {
            name: file.originalname,
            encoding: file.encoding,
            fileType: file.mimeType,
            size: file.size,
            path: path,
        };
        await this.emailService.sendUserEmail(user, pdfBuffer, fileInformation);
    }
};
exports.UserUploadService = UserUploadService;
exports.UserUploadService = UserUploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [html_pdf_service_1.HtmlPdfService,
        email_service_1.EmailService])
], UserUploadService);
//# sourceMappingURL=user-upload.service.js.map