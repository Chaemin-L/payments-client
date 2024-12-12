interface Props {
  bankName: string;
  accountNum: number;
}
export default function PaymentMethodSection({ bankName, accountNum }: Props) {
  return (
    <div className="card flex justify-between items-center w-full">
      <div>결제수단</div>
      <div className=" text-white">
        {bankName} ({accountNum.toString().slice(-4)})
      </div>
      {/* <Badge>변경</Badge> */}
    </div>
  );
}
