import PaymentsInfo from "@/app/payments-info";

interface Props {
  searchParams: Promise<{ payments: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { payments: token } = await searchParams;

  const savedPoint = 110;

  return (
    <main className="h-full">
      <PaymentsInfo token={token} savedPoint={savedPoint} />
    </main>
  );
}
