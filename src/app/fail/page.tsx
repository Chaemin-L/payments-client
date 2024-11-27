export default function SuccessPage() {
  return (
    <div className="flex flex-col justify-center h-full gap-28">
      <section className="text-center space-y-6">
        <img
          src="/icons/fail.svg"
          // src="/icons/fail2.svg"
          alt="결제 실패"
          className="mx-auto w-16 h-16"
        />
        <h1 className="text-white text-3xl font-bold">결제를 실패했어요</h1>
      </section>
    </div>
  );
}
