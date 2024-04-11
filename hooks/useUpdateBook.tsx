"use client";

import { BookType } from "@/lib/validators/book";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const useUpdateBook = ({
  id,
  initialAuthor,
  initialGenre,
  initialTitle,
  initialPublishedDate,
}: {
  id: number;
  initialAuthor: string;
  initialGenre: string;
  initialTitle: string;
  initialPublishedDate: string;
}) => {
  const router = useRouter();
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [publishedDate, setPublishedDate] = useState(initialPublishedDate);
  const [genre, setGenre] = useState(initialGenre);

  const { mutate: updateBook } = useMutation({
    mutationFn: async (payload: BookType) => {
      return await fetch("/api/book", {
        method: "PATCH",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      setTitle("");
      setAuthor("");
      setPublishedDate("");
      setGenre("");

      router.back();
      router.refresh();
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(title, author, publishedDate, genre);

    updateBook({ id, title, author, publishedDate, genre });
  };

  return {
    title,
    setTitle,
    author,
    setAuthor,
    publishedDate,
    setPublishedDate,
    genre,
    setGenre,
    handleSubmit,
  };
};

export default useUpdateBook;
