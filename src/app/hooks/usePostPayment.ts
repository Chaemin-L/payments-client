import { postPayment } from "@/services/pay";
import { useMutation } from "@tanstack/react-query";

export function usePostPayment(token: string) {
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
    }) => postPayment(token, pointToUse, orderId, amount, redirectUri),
  });
}
