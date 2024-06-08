import { SettingWhereInput } from "./SettingWhereInput";
import { SettingOrderByInput } from "./SettingOrderByInput";

export type SettingFindManyArgs = {
  where?: SettingWhereInput;
  orderBy?: Array<SettingOrderByInput>;
  skip?: number;
  take?: number;
};
