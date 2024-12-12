import { postPayment } from "@/services/pay";
import { useMutation } from "@tanstack/react-query";

export function usePostPayment(token: string) {
  return useMutation({
    mutationFn: ({
      pointToUse,
      orderId,
      redirectUri,
    }: {
      pointToUse: number;
      orderId: string;
      redirectUri: string;
    }) => postPayment(token, pointToUse, orderId, redirectUri),
  });
}
