import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

// handling metadata for dynamic pages (slug)
export async function generateMetadata({params}) {
  const meal = getMeal(params?.slug);


  if (!meal){
    notFound();
  }
  return {
    title: meal?.title,
    description: meal?.summary,
  }
}

export default function Dynamic({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>

          <p className={styles.creator}>
            by <a href={`mailto:${"EMAIL"}`}>{meal.creator_email}</a>
          </p>
          <p className={styles.summary}>{meal?.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal?.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
