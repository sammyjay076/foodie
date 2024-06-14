import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Main page</h1>
      <p>Get all your proper meals here</p>
      <Link href="meals/mac-and-cheese">
        <p>Macaroni and cheese</p>
      </Link>
    </main>
  );
}
