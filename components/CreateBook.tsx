"use client";

import { FormEvent, useState } from "react";
import { format } from "date-fns";
import { useMutation } from "@tanstack/react-query";
import { CreateBookRequest } from "@/lib/validators/book";
import { useRouter } from "next/navigation";

const CreateBook = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState(
    format(Date.now(), "y-LL-dd")
  );
  const [genre, setGenre] = useState("");

  const { mutate: createBook } = useMutation({
    mutationFn: async (payload: CreateBookRequest) => {
      return await fetch("/api/book", {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      setTitle("");
      setAuthor("");
      setPublishedDate("");
      setGenre("");

      router.refresh();
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createBook({ title, author, publishedDate, genre });
  };

  return (
    <div className="px-4 py-3 border-b">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        id="createBookForm"
      >
        <div className="flex flex-col gap-2 pb-4 border-b">
          <label htmlFor="title" className="flex gap-2 items-center">
            <h2 className="font-semibold">Title:</h2>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border bg-background px-3 py-2 text-sm h-10 rounded-md"
              placeholder="Title"
            />
          </label>
          <label htmlFor="author" className="flex gap-2 items-center">
            <h2 className="font-semibold">Author:</h2>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border bg-background px-3 py-2 text-sm h-10 rounded-md"
              placeholder="Author"
            />
          </label>
          <label htmlFor="publishedDate" className="flex gap-2 items-center">
            <h2 className="font-semibold">Published Date:</h2>
            <input
              type="date"
              id="publishedDate"
              name="publishedDate"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              className="border bg-background px-3 py-2 text-sm h-10 rounded-md"
            />
          </label>
          <label htmlFor="genre" className="flex gap-2 items-center">
            <h2 className="font-semibold">Genre:</h2>
            <input
              type="text"
              id="genre"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="border bg-background px-3 py-2 text-sm h-10 rounded-md"
              placeholder="Book Genre"
            />
          </label>
        </div>

        <input
          type="submit"
          className="self-end bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition ease-in-out cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreateBook;
