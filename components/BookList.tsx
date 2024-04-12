"use client";
import Book from "@/components/Book";
import { BookValidator } from "@/lib/validators/book";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const BookList = () => {
  const parseBooks = (data: any[] | null) => {
    try {
      const books = data?.map((d) => BookValidator.parse(d));
      return books;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: books,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const data = await fetch("/api/book");
      return parseBooks(await data.json());
    },
  });

  return (
    <>
      {!isPending && books ? (
        <ul className="flex flex-col">
          {...books.map((book) => (
            <Book book={book} className="border-b" key={book.id} />
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center pt-16">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      )}
      {isError && (
        <h2 className="py-8 font-semibold">
          Error fetching books. Try reloading the site.
        </h2>
      )}
    </>
  );
};

export default BookList;
