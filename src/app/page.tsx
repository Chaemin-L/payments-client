import PaymentsInfo from "@/app/payments-info";
import { getPayment } from "@/services/pay";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading/page";

interface Props {
  searchParams: { payments?: string };
}

// const token = "asdfasdf";
// const payment = {
//   transactionId: 0,
//   userId: 1,
//   paymentId: 1,
//   orderId: "orderId",
//   orderName: "orderName",
//   sellerId: 123,
//   amount: 123,
//   pointToUse: 1000,
//   transactionType: "adsf",
//   status: "asdf",
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   redirectUri: "asdf",
// };

export default async function Home({ searchParams }: Props) {
  const token = searchParams.payments;
  if (!token) return notFound();

  const payment = await getPayment(token);
  if (!payment) return notFound();

  return (
    <main className="h-full">
      <Suspense fallback={<Loading />}>
        <PaymentsInfo token={token} payment={payment} />
        {/* <PaymentsInfo token={token} /> */}
      </Suspense>
    </main>
  );
}
