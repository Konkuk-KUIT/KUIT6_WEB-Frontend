interface CartDescriptionProps {
  totalPrice: number;      // 주문 금액
  deliveryFee: number;     // 배달료
  finalPrice: number;      // 총 결제 금액
}

const CartDescription: React.FC<CartDescriptionProps> = ({
  totalPrice,
  deliveryFee,
  finalPrice,
}) => {
  const rows = [
    { label: "주문금액", value: totalPrice, highlight: false },
    { label: "배달요금", value: deliveryFee, highlight: false },
    { label: "총 결제금액", value: finalPrice, highlight: true },
  ];

  return (
    <div className="flex flex-col mt-[16px] px-[24px] border-b border-[#E5E8EB]">
      {rows.map((row) => {
        const containerClass = row.highlight
          ? "py-[16px] flex justify-between items-center"
          : "py-[9px] flex justify-between items-center";

        const textClass = row.highlight
          ? "text-[17px] text-[#4E5968]"
          : "text-[17px] text-[#8B95A1]";

        const valueClass = row.highlight
          ? "font-semibold text-[17px] text-[#4E5968]"
          : "text-[17px] text-[#505967]";

        return (
          <div key={row.label} className={containerClass}>
            <span className={textClass}>{row.label}</span>
            <span className={valueClass}>{row.value.toLocaleString()}원</span>
          </div>
        );
      })}
    </div>
  );
};

export default CartDescription;
