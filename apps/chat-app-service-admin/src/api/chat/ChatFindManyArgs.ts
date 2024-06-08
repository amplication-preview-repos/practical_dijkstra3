import { ChatWhereInput } from "./ChatWhereInput";
import { ChatOrderByInput } from "./ChatOrderByInput";

export type ChatFindManyArgs = {
  where?: ChatWhereInput;
  orderBy?: Array<ChatOrderByInput>;
  skip?: number;
  take?: number;
};
