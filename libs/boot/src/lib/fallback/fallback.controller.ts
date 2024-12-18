import { All, Controller } from '@nestjs/common';
import { FALLBACK_PAGE_HTML } from './fallback.html';

@Controller()
export class FallbackController {
  @All('*')
  fallback() {
    return FALLBACK_PAGE_HTML;
  }
}
