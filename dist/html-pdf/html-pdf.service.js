"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPdfService = void 0;
const common_1 = require("@nestjs/common");
const puppeteer_1 = require("puppeteer");
let HtmlPdfService = class HtmlPdfService {
    async convertHtmlToPdf(file) {
        const browser = await puppeteer_1.default.launch();
        const page = await browser.newPage();
        await page.setContent(file.buffer.toString('utf-8'), {
            waitUntil: 'domcontentloaded',
        });
        await page.emulateMediaType('screen');
        const path = `${Date.now() + '-' + file.originalname}.pdf`;
        const pdf = await page.pdf({
            path: `uploads/${path}`,
            margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
            printBackground: true,
            format: 'A4',
        });
        await browser.close();
        return {
            pdfBuffer: pdf,
            path: path,
        };
    }
};
exports.HtmlPdfService = HtmlPdfService;
exports.HtmlPdfService = HtmlPdfService = __decorate([
    (0, common_1.Injectable)()
], HtmlPdfService);
//# sourceMappingURL=html-pdf.service.js.map