import { getPayment } from "@/services/pay";
import { useQuery } from "@tanstack/react-query";

export function useGetPayment(token: string) {
  return useQuery({
    queryKey: ["payments", token],
    queryFn: () => getPayment(token),
    retry: 3,
  });
}
