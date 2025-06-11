"use client";
import { noteSchema } from "@/entities/note";
import { handleNoteSubmit } from "@/lib/actions";
import DynamicForm from "./dynamic-form";
import type { FieldConfig } from "@/form/types";

export default function ClientNoteForm({ fields }: { fields: FieldConfig[] }) {
  return (
    <DynamicForm
      schema={noteSchema}
      fields={fields}
      onSubmit={handleNoteSubmit}
    />
  );
}
