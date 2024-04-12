"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import BookForm from "./BookForm";
import { useEditBook } from "@/hooks/useEditBook";

const EditBookModal = ({
  id,
  initialAuthor,
  initialGenre,
  initialTitle,
  initialPublishedDate,
}: {
  id: number;
  initialAuthor: string;
  initialGenre: string;
  initialTitle: string;
  initialPublishedDate: string;
}) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    router.back();
  };

  useOnClickOutside(ref, closeModal);

  const { editBook } = useEditBook({
    onSuccess: () => {
      router.back();
      router.refresh();
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
      <div className="relative rounded bg-white px-12 py-10" ref={ref}>
        <button
          className="absolute right-2 top-2 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-gray-100"
          onClick={closeModal}
        >
          <X className="h-5 w-5 text-red-600" />
        </button>
        <BookForm
          initialAuthor={initialAuthor}
          initialGenre={initialGenre}
          initialPublishedDate={initialPublishedDate}
          initialTitle={initialTitle}
          onSubmit={({ author, genre, publishedDate, title }) => {
            editBook({
              author,
              genre,
              publishedDate,
              title,
              id,
            });
          }}
        />
      </div>
    </div>
  );
};

export default EditBookModal;
