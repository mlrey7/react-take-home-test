"use client";
import { BookType } from "@/lib/validators/book";
import React, { FormEvent, useState } from "react";

const BookForm = ({
  initialAuthor,
  initialGenre,
  initialTitle,
  initialPublishedDate,
  onSubmit,
}: {
  initialAuthor: string;
  initialGenre: string;
  initialTitle: string;
  initialPublishedDate: string;
  onSubmit: ({
    title,
    author,
    publishedDate,
    genre,
  }: {
    title: string;
    author: string;
    publishedDate: string;
    genre: string;
  }) => void;
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [publishedDate, setPublishedDate] = useState(initialPublishedDate);
  const [genre, setGenre] = useState(initialGenre);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({ title, author, publishedDate, genre });
    setTitle("");
    setAuthor("");
    setPublishedDate("");
    setGenre("");
  };

  return (
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
        className="self-end bg-primary px-4 py-2 rounded text-black hover:bg-primary/80 transition ease-in-out cursor-pointer font-semibold disabled:pointer-events-none disabled:opacity-50"
        disabled={
          title === "" || author === "" || publishedDate === "" || genre === ""
        }
      />
    </form>
  );
};

export default BookForm;
