// src/components/dynamic-form.tsx
"use client";
import { useForm, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldConfig } from "@/form/types";
import { z, ZodObject, ZodRawShape } from "zod";

type Props<T extends ZodRawShape> = {
  schema: ZodObject<T>;
  fields: FieldConfig[];
  onSubmit: (data: z.infer<ZodObject<T>>) => void;
};

export default function DynamicForm<T extends ZodRawShape>({
  schema,
  fields,
  onSubmit,
}: Props<T>) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  type FieldName = Path<z.infer<typeof schema>>;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col">
          <label className="font-medium mb-1">{f.label}</label>
          {f.type === "text" && (
            <input
              className="border p-2"
              {...form.register(f.name as FieldName)}
            />
          )}
          {f.type === "textarea" && (
            <textarea
              className="border p-2"
              {...form.register(f.name as FieldName)}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
