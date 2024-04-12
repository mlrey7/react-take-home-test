"use client";

import { useCreateBook } from "@/hooks/useCreateBook";
import BookForm from "./BookForm";
import { useQueryClient } from "@tanstack/react-query";

const CreateBook = () => {
  const queryClient = useQueryClient();

  const { createBook } = useCreateBook({});

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
