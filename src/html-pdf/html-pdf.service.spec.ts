import { Test, TestingModule } from '@nestjs/testing';
import { HtmlPdfService } from './html-pdf.service';

describe('HtmlPdfService', () => {
  let service: HtmlPdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HtmlPdfService],
    }).compile();

    service = module.get<HtmlPdfService>(HtmlPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
