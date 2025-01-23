"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData) {
  console.log("Received formData:", formData);

  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");
  const errors = [];

  // Validace vstupů
  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors }; // Vrácení chyb zpět klientské části
  }
  console.log("Post data is valid, proceeding to save.");

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed,post was not created. Please try again later"
    );
  }

  await storePost({
    imageUrl: imageUrl, // Implementujte logiku ukládání URL obrázku
    title,
    content,
    userId: 1, // Příklad hodnoty
  });
  revalidatePath("/", "layout");
  redirect("/feed"); // Přesměrování po úspěšném vytvoření příspěvku
}
