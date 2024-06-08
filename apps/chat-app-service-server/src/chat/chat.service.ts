import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatServiceBase } from "./base/chat.service.base";

@Injectable()
export class ChatService extends ChatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
