import { ChatWhereInput } from "./ChatWhereInput";

export type ChatListRelationFilter = {
  every?: ChatWhereInput;
  some?: ChatWhereInput;
  none?: ChatWhereInput;
};
