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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUploadController = void 0;
const common_1 = require("@nestjs/common");
const user_upload_service_1 = require("./user-upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const user_upload_entity_1 = require("./dtos/user-upload.entity");
const path_1 = require("path");
const fs = require("fs");
let UserUploadController = class UserUploadController {
    constructor(userUploadService) {
        this.userUploadService = userUploadService;
    }
    async uploadFileAndPassValidation(userUpload, file, res) {
        try {
            await this.userUploadService.convertAndEmail(userUpload, file);
            return res.status(common_1.HttpStatus.OK).json({
                success: true,
                message: 'Email sent',
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('An error occurred while sending the email.');
        }
    }
    getFilePath(filename, res) {
        const filePathInUploadsDir = (0, path_1.join)(__dirname, '../..', 'uploads', filename);
        if (fs.existsSync(filePathInUploadsDir)) {
            return res.sendFile(filePathInUploadsDir);
        }
        return res.status(404).send('File not found');
    }
};
exports.UserUploadController = UserUploadController;
__decorate([
    (0, common_1.Post)('file'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1000000 }),
            new common_1.FileTypeValidator({ fileType: 'text/html' }),
        ],
    }))),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_upload_entity_1.UserUpload, Object, Object]),
    __metadata("design:returntype", Promise)
], UserUploadController.prototype, "uploadFileAndPassValidation", null);
__decorate([
    (0, common_1.Get)(':filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserUploadController.prototype, "getFilePath", null);
exports.UserUploadController = UserUploadController = __decorate([
    (0, common_1.Controller)('user-upload'),
    __metadata("design:paramtypes", [user_upload_service_1.UserUploadService])
], UserUploadController);
//# sourceMappingURL=user-upload.controller.js.map