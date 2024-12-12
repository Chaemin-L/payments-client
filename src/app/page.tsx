import PaymentsInfo from "@/app/payments-info";
import { getPayment } from "@/services/pay";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading/page";

interface Props {
  searchParams: Promise<{ payments: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { payments: token } = await searchParams;
  const data = await getPayment(token);

  if (!token) return notFound();

  const savedPoint = 100;

  return (
    <main className="h-full">
      <Suspense fallback={<Loading />}>
        <PaymentsInfo token={token} data={data} savedPoint={savedPoint} />
      </Suspense>
    </main>
  );
}
