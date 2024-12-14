import { postPayment } from "@/services/pay";
import { FinalResponse, PaymentType } from "@/types/pay";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function usePostPayment(token: string) {
  const router = useRouter();
  return useMutation({
    mutationFn: ({
      pointToUse,
      orderId,
      amount,
      redirectUri,
    }: {
      pointToUse: number;
      orderId: string;
      amount: number;
      redirectUri: string;
    }) =>
      postPayment(token, pointToUse)
        .then((res: FinalResponse<PaymentType>) => {
          if (res.status === 200)
            return router.replace(
              `/${orderId}/success?redirectUri=${redirectUri}&amount=${amount}`
            );
        })
        .catch((err: Error) => {
          throw new Error(err.message);
        }),
  });
}
