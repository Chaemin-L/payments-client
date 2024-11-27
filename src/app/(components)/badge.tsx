"use client";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
}
export default function Badge({ className, children, ...props }: Props) {
  return (
    <button
      className={`
        px-4 py-1.5 min-w-16 bg-lightGray rounded-lg text-sm h-fit ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
