import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FaqService } from "./faq.service";
import { FaqControllerBase } from "./base/faq.controller.base";

@swagger.ApiTags("faqs")
@common.Controller("faqs")
export class FaqController extends FaqControllerBase {
  constructor(protected readonly service: FaqService) {
    super(service);
  }
}
