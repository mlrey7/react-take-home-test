"use client";

import { useRouter } from "next/navigation";
import { useCreateBook } from "@/hooks/useCreateBook";
import BookForm from "./BookForm";

const CreateBook = () => {
  const router = useRouter();

  const { createBook } = useCreateBook({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <div className="border-b px-4 py-3">
      <BookForm
        initialAuthor=""
        initialGenre=""
        initialPublishedDate=""
        initialTitle=""
        onSubmit={createBook}
      />
    </div>
  );
};

export default CreateBook;
