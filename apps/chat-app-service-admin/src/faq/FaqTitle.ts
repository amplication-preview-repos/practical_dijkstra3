import { Faq as TFaq } from "../api/faq/Faq";

export const FAQ_TITLE_FIELD = "id";

export const FaqTitle = (record: TFaq): string => {
  return record.id?.toString() || String(record.id);
};
