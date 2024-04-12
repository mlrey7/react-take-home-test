"use client";
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
      <div className="flex flex-col gap-2 border-b pb-4">
        <label htmlFor="title" className="flex items-center gap-2">
          <h2 className="font-semibold">Title:</h2>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-background h-10 rounded-md border px-3 py-2 text-sm"
            placeholder="Title"
          />
        </label>
        <label htmlFor="author" className="flex items-center gap-2">
          <h2 className="font-semibold">Author:</h2>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-background h-10 rounded-md border px-3 py-2 text-sm"
            placeholder="Author"
          />
        </label>
        <label htmlFor="publishedDate" className="flex items-center gap-2">
          <h2 className="font-semibold">Published Date:</h2>
          <input
            type="date"
            id="publishedDate"
            name="publishedDate"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            className="bg-background h-10 rounded-md border px-3 py-2 text-sm"
          />
        </label>
        <label htmlFor="genre" className="flex items-center gap-2">
          <h2 className="font-semibold">Genre:</h2>
          <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="bg-background h-10 rounded-md border px-3 py-2 text-sm"
            placeholder="Book Genre"
          />
        </label>
      </div>

      <input
        type="submit"
        className="cursor-pointer self-end rounded bg-primary px-4 py-2 font-semibold text-black transition ease-in-out hover:bg-primary/80 disabled:pointer-events-none disabled:bg-primary/30"
        disabled={
          title === "" || author === "" || publishedDate === "" || genre === ""
        }
      />
    </form>
  );
};

export default BookForm;
