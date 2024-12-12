import fetchClient from "@/lib/fetchClient";
import { FinalResponse, PaymentType } from "@/types/pay";
import { redirect } from "next/navigation";

export async function getPayment(token: string) {
  const data: FinalResponse<PaymentType> = await fetchClient(
    `/payment/verify`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        token,
      },
    }
  );
  if (data.status === 200) return data.data;
  throw new Error(data.message);
}
export async function postPayment(
  token: string,
  pointToUse: number,
  redirectUri: string
) {
  const data = await fetchClient(`/payment?pointToUse=${pointToUse}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      token,
    },
  });
  if (data.status === 200)
    return redirect(`/success?redirectUri=${redirectUri}`);
  throw new Error(data.message);
}
