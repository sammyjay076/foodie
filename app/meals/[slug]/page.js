export default function Dynamic({ params }) {
  return (
    <main>
      <h1>How to prepare {params.slug}</h1>
      <p>Prepare {params.slug} in 15 minutes</p>
    </main>
  );
}
