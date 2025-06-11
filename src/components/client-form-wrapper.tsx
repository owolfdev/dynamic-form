// src/components/client-form-wrapper.tsx
"use client";
import { z } from "zod";
import type { FieldConfig } from "@/form/types";
import DynamicForm from "./dynamic-form";
import { noteSchema } from "@/entities/note";

const formIdSchemaMap = {
  note: noteSchema,
};

type FormId = keyof typeof formIdSchemaMap;

type SchemaMap = typeof formIdSchemaMap;
type SchemaType<K extends FormId> = z.infer<SchemaMap[K]>;

interface Props<K extends FormId> {
  formId: K;
  fields: FieldConfig[];
  onSubmit: (data: SchemaType<K>) => void;
}

export default function ClientFormRouter<K extends FormId>({
  formId,
  fields,
  onSubmit,
}: Props<K>) {
  const schema = formIdSchemaMap[formId];
  return <DynamicForm schema={schema} fields={fields} onSubmit={onSubmit} />;
}
