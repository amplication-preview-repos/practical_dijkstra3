import { Setting as TSetting } from "../api/setting/Setting";

export const SETTING_TITLE_FIELD = "id";

export const SettingTitle = (record: TSetting): string => {
  return record.id?.toString() || String(record.id);
};
