import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatService } from "./chat.service";
import { ChatControllerBase } from "./base/chat.controller.base";

@swagger.ApiTags("chats")
@common.Controller("chats")
export class ChatController extends ChatControllerBase {
  constructor(protected readonly service: ChatService) {
    super(service);
  }
}
