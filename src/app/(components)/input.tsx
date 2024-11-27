import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

function Input(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      className="bg-transparent  appearance-none p-2 w-full focus:outline-0 border-b-2 focus:border-primary text-2xl border-lightGray"
      ref={ref}
      {...props}
    />
  );
}
export default forwardRef(Input);
