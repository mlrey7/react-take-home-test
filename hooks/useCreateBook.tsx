import { BookType, CreateBookRequest } from "@/lib/validators/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateBook = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();

  const { mutate: createBook } = useMutation({
    mutationFn: async (payload: CreateBookRequest) => {
      return await fetch("/api/book", {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
    onSuccess,
    onMutate: async (newBook) => {
      await queryClient.cancelQueries({ queryKey: ["books"] });
      const previousBooks = queryClient.getQueryData(["books"]);
      queryClient.setQueryData(["books"], (old: Array<BookType>) => [
        ...old,
        newBook,
      ]);
      return { previousBooks };
    },
    onError: (err, newBook, context) => {
      queryClient.setQueryData(["books"], context?.previousBooks);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  return { createBook };
};
