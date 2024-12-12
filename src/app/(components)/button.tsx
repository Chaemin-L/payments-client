import { ButtonHTMLAttributes } from "react";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  className?: string;
}
export default function Button({ className, ...props }: Props) {
  return (
    <button className={`card-primary text-lg ${className}`} {...props}>
      {props.children}
    </button>
  );
}
