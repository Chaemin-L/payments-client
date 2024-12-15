import fetchClient from "@/lib/fetchClient";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";

interface RequestType {
  userId: number;
  orderId: string;
  redirectUri: string;
  reason: string;
}

async function postCancelPayment(request: RequestType) {
  const data = await fetchClient(`/cancellation`, {
    method: "POST",
    body: JSON.stringify(request),
  });
  if (data.status === 200) return redirect(request.redirectUri);
  throw new Error(data.message);
}

export function usePostCancelPayment() {
  return useMutation({
    mutationFn: async (request: RequestType) =>
      await postCancelPayment(request),
  });
}
