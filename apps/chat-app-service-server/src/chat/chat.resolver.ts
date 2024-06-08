import * as graphql from "@nestjs/graphql";
import { ChatResolverBase } from "./base/chat.resolver.base";
import { Chat } from "./base/Chat";
import { ChatService } from "./chat.service";

@graphql.Resolver(() => Chat)
export class ChatResolver extends ChatResolverBase {
  constructor(protected readonly service: ChatService) {
    super(service);
  }
}
