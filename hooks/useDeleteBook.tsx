import { DeleteBookRequest } from "@/lib/validators/book";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteBook } = useMutation({
    mutationFn: async (payload: DeleteBookRequest) => {
      return await fetch("/api/book", {
        method: "DELETE",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  return { deleteBook };
};
