"use client";
import { ChangeEvent, useRef, useState } from "react";
import { Sheet } from "react-modal-sheet";
import Badge from "./badge";
import Button from "./button";
import Input from "./input";

interface Props {
  point: number;
  amount: number;
  pointToUse: number;
  setPointToUse: (point: number) => void;
}

export default function PointSection({
  point,
  amount,
  pointToUse,
  setPointToUse,
}: Props) {
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredPoint = e.target.value;
    const finalPoint = Math.min(point, Number(enteredPoint), amount);
    e.target.value = finalPoint.toString();
  };

  const handleSubmit = () => {
    if (!inputRef.current) return;
    const enteredPoint = Number(inputRef.current.value);
    const finalPoint = Math.min(point, enteredPoint, amount);
    inputRef.current.value = finalPoint.toString();
    setPointToUse(finalPoint);
    setOpen(false);
  };

  const handleAllUse = () => {
    if (inputRef.current) inputRef.current.value = point.toString();
  };

  return (
    <>
      <div className="card flex justify-between items-center">
        <h2>포인트</h2>
        <Badge className="flex gap-2 " onClick={() => setOpen(true)}>
          <span>{pointToUse}원</span>
          <span>|</span>
          <span> 쓰기</span>
        </Badge>
      </div>
      <Sheet
        isOpen={open}
        onClose={() => setOpen(false)}
        snapPoints={[400]}
        className="bg-black/20"
      >
        <Sheet.Backdrop onTap={() => setOpen(false)} />
        <Sheet.Container
          className=" *:bg-shadow-800 text-white max-w-[500px] px-auto"
          style={{
            background: "transparent",
            left: "50%",
            translateX: "-50%",
          }}
        >
          <Sheet.Header className="rounded-t-3xl"></Sheet.Header>
          <Sheet.Content className="p-5 flex flex-col items-start justify-between text-start gap-4 ">
            <div className="w-full">
              <div className="space-y-4">
                <div>
                  <h1 className="text-title text-white">
                    포인트를 얼마나 쓸까요?
                  </h1>
                  <small className="text-shadow-400">
                    • 포인트는 결제금액을 넘길 수 없습니다
                  </small>
                </div>
                <p className="text-shadow-400 text-sm">보유 포인트 {point}원</p>
              </div>
              <div className="space-y-10 text-right">
                <div className="flex gap-2 items-center w-full mt-4 ">
                  <Input ref={inputRef} type="number" onBlur={handleBlur} />
                  <span>원</span>
                </div>
                <Badge onClick={handleAllUse}>전액 사용</Badge>
              </div>
            </div>
            <Button onClick={handleSubmit}>확인</Button>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
