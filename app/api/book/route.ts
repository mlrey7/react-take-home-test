import {
  BookValidator,
  CreateBookRequestValidator,
  DeleteBookRequestValidator,
} from "@/lib/validators/book";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { author, genre, publishedDate, title } =
      CreateBookRequestValidator.parse(body);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    );

    const { error } = await supabase
      .from("book")
      .insert({ author, genre, publishedDate, title });

    if (error) throw new Error(`Book insert failed ${error.message}`);

    return Response.json(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Could not create new book", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, author, genre, publishedDate, title } =
      BookValidator.parse(body);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    );

    const { error } = await supabase
      .from("book")
      .update({ author, genre, publishedDate, title })
      .eq("id", id);

    if (error) throw new Error(`Book update failed ${error.message}`);

    return Response.json(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Could not create new book", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = DeleteBookRequestValidator.parse(body);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    );

    const { error } = await supabase.from("book").delete().eq("id", id);
    if (error) throw new Error(`Book deletion failed ${error.message}`);

    return Response.json(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Could not create new book", { status: 500 });
  }
}
