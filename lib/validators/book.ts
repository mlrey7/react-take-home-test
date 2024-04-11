import z from "zod";

export const BookValidator = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  publishedDate: z.string(),
  genre: z.string(),
});

export const CreateBookRequestValidator = z.object({
  title: z.string(),
  author: z.string(),
  publishedDate: z.string(),
  genre: z.string(),
});

export const DeleteBookRequestValidator = z.object({
  id: z.number(),
});

export type DeleteBookRequest = z.infer<typeof DeleteBookRequestValidator>;
export type CreateBookRequest = z.infer<typeof CreateBookRequestValidator>;
export type BookType = z.infer<typeof BookValidator>;
