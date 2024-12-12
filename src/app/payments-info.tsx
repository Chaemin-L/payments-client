"use client";
import { PaymentType } from "@/types/pay";
import Image from "next/image";
import { useState } from "react";
import Button from "./(components)/button";
import PaySection from "./(components)/pay-section";
import PointSection from "./(components)/point-section";
import { usePostPayment } from "./hooks/usePostPayment";

interface Props {
  token: string;
  payment: PaymentType;
  point: number;
  balance: number;
}

export default function PaymentsInfo({
  token,
  payment,
  point,
  balance,
}: Props) {
  const [payDisabled, setPayDisabled] = useState<boolean>(false);
  const [pointToUse, setPointToUse] = useState<number>(0);
  const { mutateAsync } = usePostPayment(token);

  const { orderName, redirectUri, amount } = payment;

  const onClickPay = async () => {
    setPayDisabled(true);
    await mutateAsync({ pointToUse, redirectUri });
  };

  return (
    <div className="relative h-full flex flex-col justify-between">
      <div>
        <section className="text-center py-20 space-y-2">
          <p className="text-shadow-400 text-base">
            {orderName ?? "잘못된 주문"}
          </p>
          <h1 className="text-white text-3xl font-bold">
            {(amount - pointToUse).toLocaleString()}원
          </h1>
        </section>
        {/** 정보 섹션 */}
        <section className="w-full flex flex-col gap-5 card-title sm:card-title-mb">
          <PaySection balance={balance} />
          <PointSection
            point={point}
            pointToUse={pointToUse}
            setPointToUse={setPointToUse}
          />
          {/* <PaymentMethodSection /> */}
        </section>
      </div>
      {/** 동의 및 결제 섹션 */}
      <section className="flex flex-col  ">
        <Button
          onClick={onClickPay}
          disabled={payDisabled}
          className="disabled:opacity-80"
        >
          동의하고 결제하기
        </Button>
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
