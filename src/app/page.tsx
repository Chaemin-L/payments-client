import fetchClient from "@/lib/fetchClient";
import PaymentsInfo from "@/app/payments-info";

interface Props {
  searchParams: Promise<{ payments: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { payments: token } = await searchParams;
  const data = fetchClient(`/${token}`);
  console.log(data);

  const savedPoint = 110;

  return (
    <main className="h-full">
      <PaymentsInfo savedPoint={savedPoint} />
    </main>
  );
}
