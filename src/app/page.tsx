// src/app/page.tsx
import ClientFormRouter from "@/components/client-form-wrapper";
import { noteFields } from "@/entities/note";
import { handleNoteSubmit } from "@/lib/actions";

export default function Page() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit a Note</h1>
      <ClientFormRouter
        formId="note"
        fields={noteFields}
        onSubmit={handleNoteSubmit}
      />
    </main>
  );
}
