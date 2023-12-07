/// <reference types="node" />
export declare class HtmlPdfService {
    convertHtmlToPdf(file: any): Promise<{
        pdfBuffer: Buffer;
        path: string;
    }>;
}
