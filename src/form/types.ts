export type FieldType = "text" | "textarea";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
};

export type EntityConfig = {
  schema: unknown;
  fields: FieldConfig[];
};
