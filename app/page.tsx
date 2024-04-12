import CreateBook from "@/components/CreateBook";
import BookList from "@/components/BookList";
import MenuTab from "@/components/MenuTab";

export default function Home() {
  return (
    <main className="container">
      <div className="mx-auto min-h-screen max-w-prose border-x">
        <MenuTab />
        <CreateBook />
        <BookList />
      </div>
    </main>
  );
}
