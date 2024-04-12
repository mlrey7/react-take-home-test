"use client";

import { useDeleteBook } from "@/hooks/useDeleteBook";
import { cn } from "@/lib/utils";
import { BookType } from "@/lib/validators/book";
import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Book = ({
  book: { id, title, author, publishedDate, genre },
  className,
}: {
  book: BookType;
  className?: string;
}) => {
  const router = useRouter();

  const { deleteBook } = useDeleteBook();

  const handleDelete = () => {
    deleteBook({ id });
  };

  const handleEdit = () => {
    router.push(
      `/edit_book?id=${id}&title=${title}&author=${author}&publishedDate=${publishedDate}&genre=${genre}`,
      {
        scroll: false,
      },
    );
  };

  return (
    <div className={cn("flex justify-between px-4 py-3", className)}>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex gap-1">
          <p className="text-sm text-gray-600">{author}</p>
          <span className="text-sm text-gray-600">•</span>
          <p className="text-sm text-gray-600">
            {format(new Date(publishedDate), "MMM d, y")}
          </p>
        </div>
        <p className="mt-4 text-sm">{genre}</p>
      </div>
      <div className="-mt-1 flex gap-2">
        <button
          className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-gray-100"
          onClick={handleEdit}
        >
          <Pencil className="h-5 w-5 text-green-600" />
        </button>
        <button
          className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-gray-100"
          onClick={handleDelete}
        >
          <Trash2 className="h-5 w-5 text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default Book;
