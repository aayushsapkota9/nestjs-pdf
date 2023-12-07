"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUploadModule = void 0;
const common_1 = require("@nestjs/common");
const user_upload_service_1 = require("./user-upload.service");
const user_upload_controller_1 = require("./user-upload.controller");
const email_module_1 = require("../email/email.module");
const html_pdf_service_1 = require("../html-pdf/html-pdf.service");
let UserUploadModule = class UserUploadModule {
};
exports.UserUploadModule = UserUploadModule;
exports.UserUploadModule = UserUploadModule = __decorate([
    (0, common_1.Module)({
        imports: [email_module_1.EmailModule],
        controllers: [user_upload_controller_1.UserUploadController],
        providers: [user_upload_service_1.UserUploadService, html_pdf_service_1.HtmlPdfService],
    })
], UserUploadModule);
//# sourceMappingURL=user-upload.module.js.map