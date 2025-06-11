// src/entities/note.ts
import { z } from "zod";
import type { FieldConfig } from "@/form/types";

export const noteSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  content: z.string().optional(),
});

export const noteFields: FieldConfig[] = [
  { name: "title", label: "Title", type: "text" },
  { name: "author", label: "Author", type: "text" },
  { name: "content", label: "Content", type: "textarea" },
];
