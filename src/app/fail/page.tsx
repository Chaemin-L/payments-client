import Image from "next/image";
export default function SuccessPage() {
  return (
    <div className="flex flex-col justify-center h-full gap-28">
      <section className="text-center space-y-6">
        <Image
          src="/icons/fail.svg"
          // src="/icons/fail2.svg"
          alt="결제 실패"
          className="mx-auto w-16 h-16"
          width={100}
          height={100}
        />
        <h1 className="text-white text-3xl font-bold">결제를 실패했어요</h1>
      </section>
    </div>
  );
}
