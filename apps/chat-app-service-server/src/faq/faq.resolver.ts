import * as graphql from "@nestjs/graphql";
import { FaqResolverBase } from "./base/faq.resolver.base";
import { Faq } from "./base/Faq";
import { FaqService } from "./faq.service";

@graphql.Resolver(() => Faq)
export class FaqResolver extends FaqResolverBase {
  constructor(protected readonly service: FaqService) {
    super(service);
  }
}
