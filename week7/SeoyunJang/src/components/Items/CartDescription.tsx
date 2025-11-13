import React from "react";
import type { CartTag } from "../../modules/stores"; // 타입만 import

interface CartTagProps {
  items: CartTag[];
}

const CartDescription: React.FC<CartTagProps> = ({ items }) => {
  return (
    <div className="flex flex-col mt-[16px] px-[24px] border-b border-[#E5E8EB]">
      {items.map((item) => {
        const containerClass = item.highlight
            ? "py-[16px] flex justify-between items-center"
            : "py-[9px] flex justify-between items-center";

        const textClass = item.highlight
            ? "text-[17px] text-[#4E5968]"
            : "text-[17px] text-[#8B95A1]";

        const subtextClass = item.highlight
            ? "font-semibold text-[17px] text-[#4E5968]"
            : "text-[17px] text-[#505967]";

        return (
          <div key={item.label} className={containerClass}>
            <span className={textClass}>{item.label}</span>
            <span className={subtextClass}>{item.value.toLocaleString()}원</span>
          </div>
        );
      })}
    </div>
  );
};

export default CartDescription;
