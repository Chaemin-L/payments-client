import PaymentsInfo from "@/app/payment/payments-info";
import { Suspense } from "react";
import Loading from "../loading/page";

interface Props {
  searchParams: Promise<{ token?: string }>;
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
//   bankName: "우리",
//   accountNum: "123123123123",
//   pointBalance: 123,
//   balance: 123123,
// };

export default async function Home({ searchParams }: Props) {
  const token = (await searchParams).token;

  // const payment = await getPayment(token);
  // if (!payment) return notFound();

  return (
    <main className="h-full">
      <Suspense fallback={<Loading />}>
        {/* <PaymentsInfo token={token!} payment={payment} /> */}
        <PaymentsInfo token={token!} />
      </Suspense>
    </main>
  );
}
