import { postPayment } from "@/services/pay";
import { useMutation } from "@tanstack/react-query";

export function usePostPayment(token: string) {
  return useMutation({
    mutationFn: ({
      pointToUse,
      redirectUri,
    }: {
      pointToUse: number;
      redirectUri: string;
    }) => postPayment(token, pointToUse, redirectUri),
  });
}
