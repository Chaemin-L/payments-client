import { Suspense } from "react";
import Loading from "../../loading/page";
import OrderInfo from "./order-info";

interface Props {
  params: Promise<{ orderId: string }>;
  searchParams: Promise<{ amount: number; redirectUri: string }>;
}

export default async function SuccessPage({ params, searchParams }: Props) {
  const { orderId } = await params;
  const { amount, redirectUri } = await searchParams;

  return (
    <Suspense fallback={<Loading />}>
      <OrderInfo orderId={orderId} amount={amount} redirectUri={redirectUri} />
    </Suspense>
  );
}
