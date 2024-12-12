import { postPayment } from "@/services/pay";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function usePostPayment(token: string) {
  const router = useRouter();
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
