import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/image.slideshow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Chillop food for chilling squad</h1>
            <p>Delicious meals, shared by a food-loving community.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            Chillop Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Chillop Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Chillop Food?</h2>
          <p>
            Chillop Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Chillop Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
