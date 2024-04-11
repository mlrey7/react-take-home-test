"use client";

import { cn } from "@/lib/utils";
import { BookType, DeleteBookRequest } from "@/lib/validators/book";
import { useMutation } from "@tanstack/react-query";
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

  const { mutate: deleteBook } = useMutation({
    mutationFn: async (payload: DeleteBookRequest) => {
      return await fetch("/api/book", {
        method: "DELETE",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  const handleDelete = () => {
    deleteBook({ id });
  };

  const handleEdit = () => {
    router.push(
      `/edit_book?id=${id}&title=${title}&author=${author}&publishedDate=${publishedDate}&genre=${genre}`
    );
  };

  return (
    <div className={cn("flex justify-between px-4 py-3", className)}>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex gap-1">
          <p className="text-gray-600 text-sm">{author}</p>
          <span className="text-sm text-gray-600">•</span>
          <p className="text-gray-600 text-sm">
            {format(new Date(publishedDate), "MMM d, y")}
          </p>
        </div>
        <p className="mt-4 text-sm">{genre}</p>
      </div>
      <div className="flex gap-2 -mt-1">
        <button
          className="h-8 w-8 cursor-pointer hover:bg-gray-100 rounded-md transition-colors inline-flex items-center justify-center"
          onClick={handleEdit}
        >
          <Pencil className="w-5 h-5 text-green-600" />
        </button>
        <button
          className="h-8 w-8 cursor-pointer hover:bg-gray-100 rounded-md transition-colors inline-flex items-center justify-center"
          onClick={handleDelete}
        >
          <Trash2 className="w-5 h-5 text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default Book;
