import { sql } from "@vercel/postgres";

export async function insertNote(data: { title: string; content?: string }) {
  await sql`
    INSERT INTO notes (title, content)
    VALUES (${data.title}, ${data.content || null})
  `;
}
