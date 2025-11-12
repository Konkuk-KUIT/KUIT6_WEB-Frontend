import Button from "../Button";

interface Menu {
  price: number;
}

const OrderBar = () => {
  const menus: Menu[] = [];

  const handleOrder = () => {};

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div>
      <div>총 주문금액</div>
      <div>{totalPrice}원</div>
      <Button onClick={handleOrder} type="button" size="lg">
        주문하기
      </Button>
    </div>
  );
};

export default OrderBar;
