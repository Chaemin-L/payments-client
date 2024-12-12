interface Props {
  balance: number;
}

export default function PaySection({ balance }: Props) {
  return (
    <div className="card flex justify-between ">
      <h2>페이 잔액</h2>
      <span className="text-white">{balance.toLocaleString()} 원</span>
    </div>
  );
}
