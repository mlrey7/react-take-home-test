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
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="px-12 py-10 bg-white rounded relative" ref={ref}>
        <button
          className="absolute top-2 right-2 h-8 w-8 cursor-pointer hover:bg-gray-100 rounded-md transition-colors inline-flex items-center justify-center"
          onClick={closeModal}
        >
          <X className="w-5 h-5 text-red-600" />
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
