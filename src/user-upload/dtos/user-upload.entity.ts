import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';

export class UserUpload {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  file: File;
}
