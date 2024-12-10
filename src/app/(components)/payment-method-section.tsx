import Badge from "./badge";

export default function PaymentMethodSection() {
  return (
    <div className="card flex justify-between items-center">
      <div>
        <div className="mb-4 ">결제수단</div>
        <div className="flex">
          <div className="flex flex-col ">
            <div className="text-white text-lg">KB종합통장-저축예금</div>
            <p className="text-sm font-normal">
              KB국민은행{"\n"}39610202200202020
            </p>
          </div>
        </div>
      </div>
      <Badge>변경</Badge>
    </div>
  );
}
