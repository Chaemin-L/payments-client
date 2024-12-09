import PaymentsInfo from "./payments-info";

export default function Home() {
  const savedPoint = 110;

  return (
    <main className="h-full">
      <PaymentsInfo savedPoint={savedPoint} />
    </main>
  );
}
