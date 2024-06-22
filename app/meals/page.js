import { Suspense } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All meals",
  description:
    "Browse through all the delicious meals shared by our community.",
};


async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  // const meals = await getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious means, created{" "}
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it your way it is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
