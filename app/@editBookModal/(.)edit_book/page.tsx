"use client";

import EditBookModal from "@/components/EditBookModal";
import { BookValidator } from "@/lib/validators/book";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const genre = searchParams.get("genre");
  const publishedDate = searchParams.get("publishedDate");
  const author = searchParams.get("author");

  const book = BookValidator.safeParse({
    id: Number(id),
    title,
    genre,
    publishedDate,
    author,
  });

  if (!book.success)
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );

  return (
    <EditBookModal
      id={book.data.id}
      initialAuthor={book.data.author}
      initialGenre={book.data.genre}
      initialPublishedDate={book.data.publishedDate}
      initialTitle={book.data.title}
    />
  );
};

export default Page;
