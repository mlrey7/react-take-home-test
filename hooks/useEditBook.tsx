import { BookType } from "@/lib/validators/book";
import { useMutation } from "@tanstack/react-query";

export const useEditBook = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { mutate: editBook } = useMutation({
    mutationFn: async (payload: BookType) => {
      return await fetch("/api/book", {
        method: "PATCH",
        body: JSON.stringify(payload),
      });
    },
    onSuccess,
  });

  return { editBook };
};
