import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  // sanitize and clean meal data (instructions)
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension} znz`;

  // fs to create a string to write data to a certain file.
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  // all fields except id, which is automatically generated
  db.prepare(
    `INSERT INTO meals(title, summary, instructions, image, creator, creator_email, slug)
    VALUES(@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
    `
  ).run(meal);
  // insert into and values must follow the same value
}