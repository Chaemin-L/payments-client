import Badge from "./(components)/badge";

export default function Home() {
  return (
    <div className="mx-auto max-w-[500px] border-black  border h-full text-black p-4">
      <main className="relative h-full flex flex-col justify-between">
        <div>
          <section className="text-center py-20 space-y-2">
            <p className="text-description text-base">플랜티파이</p>
            <h1 className="text-white text-3xl font-bold">
              {Number("50000").toLocaleString()}원
            </h1>
          </section>
          {/** 정보 섹션 */}
          <section className="w-full flex flex-col gap-5 card-title sm:card-title-mb">
            <div className="card flex justify-between items-center">
              <h2>포인트</h2>
              <Badge className="flex gap-2 ">
                <span>0원</span>
                <span>|</span>
                <span> 쓰기</span>
              </Badge>
            </div>
            <div className="card flex justify-between items-center">
              <div>
                <div className="mb-4 ">결제수단</div>
                <div className="flex">
                  <img />
                  <div className="flex flex-col ">
                    <div className="text-white text-lg">
                      KB종합통장-저축예금
                    </div>
                    <p className="text-sm font-normal">
                      KB국민은행{"\n"}39610202200202020
                    </p>
                  </div>
                </div>
              </div>
              <Badge>변경</Badge>
            </div>
          </section>
        </div>
        {/** 동의 및 결제 섹션 */}
        <section className="flex flex-col  ">
          <button className=" card-primary text-lg">동의하고 결제하기</button>
          <div className="flex gap-2 p-5 w-full justify-center text-sm">
            <img
              src="/icons/check.svg"
              alt="결제 동의"
              className="w-5 h-5 inline"
            />
            <span className="text-primary">필수</span>
            <span className="text-description">
              결제 정보 확인 및 정보 제공 동의
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
