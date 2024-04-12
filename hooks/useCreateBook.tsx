import { CreateBookRequest } from "@/lib/validators/book";
import { useMutation } from "@tanstack/react-query";

export const useCreateBook = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { mutate: createBook } = useMutation({
    mutationFn: async (payload: CreateBookRequest) => {
      return await fetch("/api/book", {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
    onSuccess,
  });

  return { createBook };
};
