// auth.service.ts

import { Injectable } from '@nestjs/common';
import { EmailService } from './../email/email.service';
import { User } from './../user/user.entity';

@Injectable()
export class AuthService {
  constructor(private emailService: EmailService) {}

  async signUp(user: User, file) {
    // create user in db
    // ...
    // send welcome mail
    await this.emailService.sendUserWelcome(user, file);
  }
}
