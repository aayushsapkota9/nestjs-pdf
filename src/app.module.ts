import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import { HtmlPdfModule } from './html-pdf/html-pdf.module';
import { UserUploadModule } from './user-upload/user-upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    EmailModule,
    HtmlPdfModule,
    UserUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
