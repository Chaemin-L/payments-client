import fetchClient from "@/lib/fetchClient";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";

interface RequestType {
  userId: number;
  orderId: string;
  redirectUri: string;
  reasons: string;
}

async function postCancelPayment(token: string, request: RequestType) {
  const data = await fetchClient(`/cancellation`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      Authorization: `Bearer ${token}`,
      token,
    },
  });
  if (data.status === 200) return redirect(request.redirectUri);
  throw new Error(data.message);
}

export function usePostCancelPayment(token: string) {
  return useMutation({
    mutationFn: async (request: RequestType) =>
      await postCancelPayment(token, request),
  });
}
