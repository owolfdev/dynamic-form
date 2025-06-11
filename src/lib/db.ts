// src/lib/db.ts
import { sql } from "@vercel/postgres";
import { ZodObject, ZodRawShape, z } from "zod";

export async function insertEntity<T extends ZodRawShape>(
  schema: ZodObject<T>,
  table: string,
  data: z.infer<typeof schema>
) {
  const parsed = schema.parse(data);
  const keys = Object.keys(parsed);
  const values = Object.values(parsed);

  const columns = keys.map((k) => `"${k}"`).join(", ");
  const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");

  const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;

  await sql.query(query, values);
}
