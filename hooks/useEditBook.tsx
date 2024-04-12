import { BookType } from "@/lib/validators/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditBook = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();

  const { mutate: editBook } = useMutation({
    mutationFn: async (payload: BookType) => {
      return await fetch("/api/book", {
        method: "PATCH",
        body: JSON.stringify(payload),
      });
    },
    onSuccess,
    onMutate: async (newBook) => {
      await queryClient.cancelQueries({ queryKey: ["books"] });
      const previousBooks = queryClient.getQueryData(["books"]);
      queryClient.setQueryData(["books"], (old: Array<BookType>) =>
        old.map((book) => (book.id === newBook.id ? newBook : book)),
      );
      return { previousBooks };
    },
    onError: (err, newBook, context) => {
      queryClient.setQueryData(["books"], context?.previousBooks);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  return { editBook };
};
