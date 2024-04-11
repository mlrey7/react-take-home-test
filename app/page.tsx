import CreateBook from "@/components/CreateBook";
import { Suspense } from "react";
import BookList from "@/components/BookList";
import { Loader2 } from "lucide-react";
import MenuTab from "@/components/MenuTab";

export default async function Home() {
  return (
    <main className="container">
      <div className="max-w-prose mx-auto border-x min-h-screen">
        <MenuTab />
        <CreateBook />
        <Suspense
          fallback={
            <div className="pt-16 flex justify-center items-center">
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
