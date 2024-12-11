"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./(components)/button";
import PaymentMethodSection from "./(components)/payment-method-section";
import PointSection from "./(components)/point-section";
import { useGetPayment } from "./hooks/useGetPayment";
import { usePostPayment } from "./hooks/usePostPayment";

interface Props {
  token: string;
  savedPoint: number;
}

export default function PaymentsInfo({ token, savedPoint }: Props) {
  const [payment] = useState<number>(50000);
  const [pointToUse] = useState<number>(0);
  const { data: product } = useGetPayment(token);
  const { mutate } = usePostPayment(token);

  return (
    <div className="relative h-full flex flex-col justify-between">
      <div>
        <section className="text-center py-20 space-y-2">
          <p className="text-shadow-400 text-base">
            {/* {product.orderName ?? "orderName 없음"} */}
            오더네임
          </p>
          <h1 className="text-white text-3xl font-bold">
            {(payment - pointToUse).toLocaleString()}원
          </h1>
        </section>
        {/** 정보 섹션 */}
        <section className="w-full flex flex-col gap-5 card-title sm:card-title-mb">
          <PointSection savedPoint={savedPoint} usingPoint={pointToUse} />
          <PaymentMethodSection />
        </section>
      </div>
      {/** 동의 및 결제 섹션 */}
      <section className="flex flex-col  ">
        {/* <Link href="/success"> */}
        <Button onClick={() => mutate(pointToUse)}>동의하고 결제하기</Button>
        {/* </Link> */}
        <div className="flex gap-2 p-5 w-full justify-center text-sm">
          <Image
            src="/icons/check.svg"
            className="w-5 h-5 inline"
            alt="결제 동의"
            width={100}
            height={100}
          />
          <span className="text-accent-green">필수</span>
          <span className="text-shadow-400">
            결제 정보 확인 및 정보 제공 동의
          </span>
        </div>
      </section>
    </div>
  );
}
