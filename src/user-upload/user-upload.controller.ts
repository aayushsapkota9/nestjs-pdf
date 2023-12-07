import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserUploadService } from './user-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserUpload } from './dtos/user-upload.entity';

@Controller('user-upload')
export class UserUploadController {
  constructor(private readonly userUploadService: UserUploadService) {}
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFileAndPassValidation(
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
  ): Promise<void> {
    // return {
    //   this.authService.signUp(body)
    //   // body,
    //   // file: file.buffer.toString(),
    // };
    return this.userUploadService.convertAndEmail(userUpload, file);
  }
}
