"use client";

import Link from "next/link";

export default function NotFound({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex justify-around items-center flex-col h-full text-white bg-zinc-900">
      <div className="flex flex-col text-center gap-4 ">
        <h1 className="text-2xl">404</h1>
        <p className="text-t2">잘못된 접근입니다</p>
      </div>
      <Link
        href={"https://www.plantify.co.kr"}
        className="bg-accent-purple rounded-full px-4 py-2 font-bold"
      >
        Plantify 구경가기
      </Link>
    </div>
  );
}
