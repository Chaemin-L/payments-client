"use client";
import { Sheet } from "react-modal-sheet";
import Badge from "./badge";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Input from "./input";
import Button from "./button";

interface Props {
  savedPoint: number;
  usingPoint: number;
  setUsingPoint: (point: number) => void;
}

export default function PointSection({
  savedPoint,
  usingPoint,
  setUsingPoint,
}: Props) {
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredPoint = Number(e.target.value);
    if (savedPoint < enteredPoint) e.target.value = savedPoint.toString();
  };

  const handleAllUse = () => {
    if (inputRef.current) inputRef.current.value = savedPoint.toString();
  };

  useEffect(() => {
    if (inputRef.current) setUsingPoint(Number(inputRef.current.value));
    console.log("asdf");
  }, [inputRef.current]);

  return (
    <>
      <div className="card flex justify-between items-center">
        <h2>포인트</h2>
        <Badge className="flex gap-2 " onClick={() => setOpen(true)}>
          <span>{usingPoint}원</span>
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
              <div className="space-y-2">
                <h1 className="text-title text-white">
                  포인트를 얼마나 쓸까요?
                </h1>
                <p className="text-shadow-400 text-sm">보유 포인트 82원</p>
              </div>
              <div className="space-y-10">
                <div className="flex gap-2 items-center w-full mt-4">
                  <Input ref={inputRef} type="number" onBlur={handleOnBlur} />
                  <span>원</span>
                </div>
                <Badge onClick={handleAllUse}>전액 사용</Badge>
              </div>
            </div>
            <Button onClick={() => setOpen(false)}>확인</Button>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
