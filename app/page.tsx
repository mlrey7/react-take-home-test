import CreateBook from "@/components/CreateBook";
import { Suspense } from "react";
import BookList from "@/components/BookList";
import { Loader2 } from "lucide-react";
import MenuTab from "@/components/MenuTab";

export default async function Home() {
  return (
    <main className="container">
      <div className="mx-auto min-h-screen max-w-prose border-x">
        <MenuTab />
        <CreateBook />
        <Suspense
          fallback={
            <div className="flex items-center justify-center pt-16">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          }
        >
          <BookList />
        </Suspense>
      </div>
    </main>
  );
}
