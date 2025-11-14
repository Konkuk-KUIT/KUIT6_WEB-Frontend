export default function StoreHeader() {
  return (
    <div className="px-6 py-4 border-b border-gray-100">
      <h2 className="text-[26px] font-bold">샐로리 한남점</h2>
      <div className="flex items-center text-sm mt-1 mb-4 text-[#4E5968]">
        <img src="/src/assets/star.svg" alt="star" className="w-4 h-4 mr-1" />
        <span className="font-medium">4.9</span>
        <span className="ml-1">리뷰 3,919</span>
      </div>

      <div className="text-sm text-[#4E5968] space-y-1">
        <p>
          <span className="mr-3 font-medium">결제방법</span>
          토스결제만 현장결제 안됨
        </p>

        <p>
          <span className="mr-3 font-medium">최소주문</span>
          13,000원
        </p>

        <p>
          <span className="mr-3 font-medium">배달시간</span>약 15-25분
        </p>
      </div>
    </div>
  );
}
