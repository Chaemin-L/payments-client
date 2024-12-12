"use client";

import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex justify-around items-center flex-col h-full text-white bg-zinc-900">
      <div className="flex flex-col text-center gap-4 ">
        <h1 className="text-2xl">{error.message}</h1>
        <p className="text-t2">통신 중 에러가 발생했습니다</p>
        <p>{error.digest}</p>
      </div>
      <Link
        href={"https://www.plantify.co.kr"}
        className="bg-accent-purple rounded-full px-4 py-2 font-bold text-black"
      >
        Plantify 구경가기
      </Link>
    </div>
  );
}
