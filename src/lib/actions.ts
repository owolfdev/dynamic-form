// src/lib/actions.ts
"use server";
import { redirect } from "next/navigation";
import { insertEntity } from "@/lib/db";
import { noteSchema } from "@/entities/note";
import { z } from "zod";

type NoteFormData = z.infer<typeof noteSchema>;

export async function handleNoteSubmit(data: NoteFormData) {
  await insertEntity(noteSchema, "notes", data);
  redirect("/thank-you");
}
