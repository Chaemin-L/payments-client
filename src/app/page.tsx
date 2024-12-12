import PaymentsInfo from "@/app/payments-info";
import { getPayment, getPoint } from "@/services/pay";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading/page";

interface Props {
  searchParams: Promise<{ payments: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { payments: token } = await searchParams;
  const payment = await getPayment(token);
  const { pointBalance: point } = await getPoint(token);

  if (!token) return notFound();

  return (
    <main className="h-full">
      <Suspense fallback={<Loading />}>
        <PaymentsInfo token={token} payment={payment} point={point} />
      </Suspense>
    </main>
  );
}
