"use client";
import Button from "@/app/(components)/button";
import Badge from "./(components)/badge";
import PointSection from "./(components)/point-section";
import { useState } from "react";
import PaymentMethodSection from "./(components)/payment-method-section";

export default function Home() {
  const savedPoint = 82;
  const [payment, setPayment] = useState<number>(50000);
  const [usingPoint, setUsingPoint] = useState<number>(0);

  return (
    <div className="mx-auto max-w-[500px]  h-full text-black p-4">
      <main className="relative h-full flex flex-col justify-between">
        <div>
          <section className="text-center py-20 space-y-2">
            <p className="text-shadow-400 text-base">플랜티파이</p>
            <h1 className="text-white text-3xl font-bold">
              {(payment - usingPoint).toLocaleString()}원
            </h1>
          </section>
          {/** 정보 섹션 */}
          <section className="w-full flex flex-col gap-5 card-title sm:card-title-mb">
            <PointSection
              savedPoint={savedPoint}
              usingPoint={usingPoint}
              setUsingPoint={setUsingPoint}
            />
            <PaymentMethodSection />
          </section>
        </div>
        {/** 동의 및 결제 섹션 */}
        <section className="flex flex-col  ">
          <Button>동의하고 결제하기</Button>
          <div className="flex gap-2 p-5 w-full justify-center text-sm">
            <img
              src="/icons/check.svg"
              alt="결제 동의"
              className="w-5 h-5 inline"
            />
            <span className="text-accent-green">필수</span>
            <span className="text-shadow-400">
              결제 정보 확인 및 정보 제공 동의
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
