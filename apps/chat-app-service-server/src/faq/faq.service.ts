import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FaqServiceBase } from "./base/faq.service.base";

@Injectable()
export class FaqService extends FaqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
