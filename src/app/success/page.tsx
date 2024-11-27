"use client";

import { useEffect, useState } from "react";
import Loading from "../loading/page";

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-center h-full gap-28">
      <section className="text-center space-y-6">
        <img
          src="/icons/success.svg"
          alt="결제 성공"
          className="mx-auto w-16 h-16"
        />
        <h1 className="text-white text-3xl font-bold">결제 완료</h1>
      </section>
      <section className="flex flex-col gap-2 text-white">
        <div className="flex items-center justify-between">
          <div>결제 금액</div>
          <div className="text-shadow-300">{(50000).toLocaleString()}원</div>
        </div>
        <div className="flex items-center justify-between">
          <div>주문번호 </div>
          <div className="text-shadow-300">AS45D22EWV5A</div>
        </div>
      </section>
    </div>
  );
}
