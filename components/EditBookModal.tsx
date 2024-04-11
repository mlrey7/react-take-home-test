"use client";

import useUpdateBook from "@/hooks/useUpdateBook";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

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
  const {
    author,
    setAuthor,
    genre,
    setGenre,
    handleSubmit,
    publishedDate,
    setPublishedDate,
    setTitle,
    title,
  } = useUpdateBook({
    id,
    initialAuthor,
    initialGenre,
    initialPublishedDate,
    initialTitle,
  });

  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    router.back();
  };

  useOnClickOutside(ref, closeModal);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="px-12 py-10 bg-white rounded relative" ref={ref}>
        <button
          className="absolute top-2 right-2 h-8 w-8 cursor-pointer hover:bg-gray-100 rounded-md transition-colors inline-flex items-center justify-center"
          onClick={closeModal}
        >
          <X className="w-5 h-5 text-red-600" />
        </button>
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
    </div>
  );
};

export default EditBookModal;
