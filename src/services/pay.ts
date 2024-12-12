import fetchClient from "@/lib/fetchClient";
import { FinalResponse, PaymentType, PayType, PointType } from "@/types/pay";
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
  orderId: string,
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

export async function getPoint(token: string) {
  const data: FinalResponse<PointType> = await fetchClient("/points", {
    headers: {
      Authorization: `Bearer ${token}`,
      token,
    },
  });
  if (data.status === 200) return data.data;
  throw new Error(data.message);
}

export async function getPay(token: string) {
  const data: FinalResponse<PayType> = await fetchClient(`/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      token,
    },
  });
  if (data.status === 200) return data.data;
  throw new Error(data.message);
}
