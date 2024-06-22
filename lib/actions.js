"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim()?.length === 0;
}

// add previous state when using useActionState;
export async function shareMeal(prevState, formData) {
  // FormData class available in the Javascript
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Validate the meal
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid meal data");
    return {
      message: "Invalid meal data",
    };
  }

  // Save the meal to the database
  console.log(meal);
  await saveMeal(meal);
  // redirect user to a different page

  // before redirect, revalidated path
  revalidatePath("/meals");
  redirect("/meals");
}
