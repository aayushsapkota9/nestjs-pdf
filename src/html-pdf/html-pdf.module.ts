import { Module } from '@nestjs/common';
import { HtmlPdfService } from './html-pdf.service';

@Module({
  providers: [HtmlPdfService],
})
export class HtmlPdfModule {}
