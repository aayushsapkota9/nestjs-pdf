/// <reference types="multer" />
import { UserUploadService } from './user-upload.service';
import { UserUpload } from './dtos/user-upload.entity';
import { Response } from 'express';
export declare class UserUploadController {
    private readonly userUploadService;
    constructor(userUploadService: UserUploadService);
    uploadFileAndPassValidation(userUpload: UserUpload, file: Express.Multer.File): Promise<any>;
    getFilePath(filename: string, res: Response): void | Response<any, Record<string, any>>;
}
