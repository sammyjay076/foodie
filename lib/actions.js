"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  // FormData class available in the Javascript
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Save the meal to the database
  console.log(meal);
  await saveMeal(meal);
  // redirect user to a different page
  redirect("/meals");
}
