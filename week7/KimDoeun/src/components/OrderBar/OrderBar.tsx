import Button from "../Button";

// interface Menu {
//   price: number;
// }

const OrderBar = () => {
  // const menus: Menu[] = [];

  const handleOrder = () => { };

  // const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="fixed bottom-0 w-full flex flex-row rounded-t-[16px] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] items-center justify-between bg-[#FFFFFF]">
      <div className="flex flex-col gap-[5px] mt-[19px] mb-[42px]">
        <div className="ml-[24px] text-[15px] text-[#6B7684] font-[400]">총 주문금액</div>
        <div className="ml-[24px] text-[17px] font-[600]">12,100원</div>
      </div>
      <div className="mr-[24px]">
        <Button onClick={handleOrder} type="button" size="lg">
          주문하기
        </Button>
      </div>
    </div>
  );
};

export default OrderBar;
