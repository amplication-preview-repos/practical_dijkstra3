import { Module } from "@nestjs/common";
import { FaqModuleBase } from "./base/faq.module.base";
import { FaqService } from "./faq.service";
import { FaqController } from "./faq.controller";
import { FaqResolver } from "./faq.resolver";

@Module({
  imports: [FaqModuleBase],
  controllers: [FaqController],
  providers: [FaqService, FaqResolver],
  exports: [FaqService],
})
export class FaqModule {}
