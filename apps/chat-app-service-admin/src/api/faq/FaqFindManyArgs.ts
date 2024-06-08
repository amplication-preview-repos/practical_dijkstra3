import { FaqWhereInput } from "./FaqWhereInput";
import { FaqOrderByInput } from "./FaqOrderByInput";

export type FaqFindManyArgs = {
  where?: FaqWhereInput;
  orderBy?: Array<FaqOrderByInput>;
  skip?: number;
  take?: number;
};
