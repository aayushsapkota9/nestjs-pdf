import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpStatus,
  InternalServerErrorException,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserUploadService } from './user-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserUpload } from './dtos/user-upload.entity';
import { Response } from 'express';
import { join } from 'path';
import * as fs from 'fs';

@Controller('user-upload')
export class UserUploadController {
  constructor(private readonly userUploadService: UserUploadService) {}
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileAndPassValidation(
    @Body() userUpload: UserUpload,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000000 }),
          new FileTypeValidator({ fileType: 'text/html' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Res() res: Response,
  ): Promise<any> {
    try {
      await this.userUploadService.convertAndEmail(userUpload, file);
      return res.status(HttpStatus.OK).json({
        success: true,
        message: 'Email sent',
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while sending the email.',
      );
    }
  }
  @Get(':filename')
  getFilePath(@Param('filename') filename: string, @Res() res: Response) {
    const filePathInUploadsDir = join(__dirname, '../..', 'uploads', filename);
    if (fs.existsSync(filePathInUploadsDir)) {
      return res.sendFile(filePathInUploadsDir);
    }
    return res.status(404).send('File not found');
  }
}
