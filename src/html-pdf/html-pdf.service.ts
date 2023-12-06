import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class HtmlPdfService {
  async convertHtmlToPdf(file) {
    // Create a browser instance
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    // If you want to use the HTML content from the file object
    await page.setContent(file.buffer.toString('utf-8'), {
      waitUntil: 'domcontentloaded',
    });

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

    // Download the PDF
    const pdf = await page.pdf({
      path: 'result.pdf',
      margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
      printBackground: true,
      format: 'A4',
    });

    // Close the browser instance
    await browser.close();
    return pdf;
  }
}
