import Book from "@/components/Book";
import { createClient } from "../lib/db";
import { BookValidator } from "@/lib/validators/book";

const BookList = async () => {
  const db = createClient();
  const { data } = await db.from("book").select();

  const parseBooks = (data: any[] | null) => {
    try {
      const books = data?.map((d) => BookValidator.parse(d));
      return books;
    } catch (error) {
      console.error(error);
    }
  };

  const books = parseBooks(data);

  return (
    <>
      {books ? (
        <ul className="flex flex-col">
          {...books.map((book) => (
            <Book book={book} className="border-b" key={book.id} />
          ))}
        </ul>
      ) : (
        <h2 className="py-8 font-semibold">
          Error fetching books. Try reloading the site.
        </h2>
      )}
    </>
  );
};

export default BookList;
