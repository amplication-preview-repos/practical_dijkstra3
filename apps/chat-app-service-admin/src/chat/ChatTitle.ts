import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "id";

export const ChatTitle = (record: TChat): string => {
  return record.id?.toString() || String(record.id);
};
