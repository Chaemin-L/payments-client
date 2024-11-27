import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="card-primary text-lg" {...props}>
      {props.children}
    </button>
  );
}
