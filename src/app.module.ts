import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import { AuthModule } from './auth/auth.module';
import { HtmlPdfModule } from './html-pdf/html-pdf.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    EmailModule,
    AuthModule,
    HtmlPdfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
