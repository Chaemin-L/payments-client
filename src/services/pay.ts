import fetchClient from "@/lib/fetchClient";
import { redirect } from "next/navigation";

export async function getPayment(token: string) {
  const data = await fetchClient(`/verify`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      token,
    },
  });
  if (data.status === 200) return data;
  throw new Error(data.message);
}
export async function postPayment(token: string, pointToUse: number) {
  const data = await fetchClient(`?pointToUse=${pointToUse}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      token,
    },
  });
  if (data.status === 200) return redirect("/success");
  throw new Error(data.message);
}
