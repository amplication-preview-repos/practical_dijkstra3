import { Resource as TResource } from "../api/resource/Resource";

export const RESOURCE_TITLE_FIELD = "id";

export const ResourceTitle = (record: TResource): string => {
  return record.id?.toString() || String(record.id);
};
