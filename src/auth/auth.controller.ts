// auth.controller.ts

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
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post()
  // signUp(@Body() userDto: User): Promise<void> {
  //   return this.authService.signUp(userDto);
  // }
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFileAndPassValidation(
    @Body() userUpload: User,
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
    return this.authService.signUp(userUpload, file);
  }
}
