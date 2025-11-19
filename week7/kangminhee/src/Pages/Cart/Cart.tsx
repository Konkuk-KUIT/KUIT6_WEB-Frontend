import styled from "styled-components";
import HeaderBar from "../../components/HeaderBar";
import warningIcon from "../../assets/warning.svg";
import arrowIcon from "../../assets/rightarrow.svg";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../Pages/Store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();

  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const clearCart = useCartStore((state) => state.clearCart);

  // 장바구니 비었을 때
  if (!store || menus.length === 0) {
    return (
      <EmptyContainer>
        <HeaderBar onBack={() => navigate("/store")} />
        <EmptyText>장바구니가 비어있습니다.</EmptyText>
      </EmptyContainer>
    );
  }

  const groupedMenus = menus.reduce((acc: any[], cur) => {
    const existing = acc.find((item) => item.id === cur.id);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ ...cur, count: 1 });
    }
    return acc;
  }, []);

  const orderAmount = groupedMenus.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );

  const deliveryFee = 2000;
  const totalPrice = orderAmount + deliveryFee;
  const minOrderPrice = store.minDeliveryPrice;

  return (
    <Container>
      <HeaderWrapper>
        <HeaderBar onBack={() => navigate("/store")} />

        <CancelText
          onClick={() => {
            clearCart();
            navigate("/store");
          }}
        >
          주문 취소
        </CancelText>
      </HeaderWrapper>

      <HeaderSection>
        <StoreTitle>{store.name}</StoreTitle>

        {totalPrice < minOrderPrice && (
          <WarningBox>
            <span>최소금액 미달</span>
            <img src={warningIcon} alt="경고" />
          </WarningBox>
        )}
      </HeaderSection>

      {groupedMenus.map((menu) => (
        <OrderItem key={menu.id}>
          <ImagePlaceholder />
          <OrderInfo>
            <ItemName>{menu.name}</ItemName>
            <ItemDesc>{menu.ingredients}</ItemDesc>
            <Price>
              {(menu.price * menu.count).toLocaleString()}원
            </Price>
          </OrderInfo>

          <RightSection>
            <Quantity>{menu.count}개</Quantity>
            <ArrowIcon src={arrowIcon} alt="" />
          </RightSection>
        </OrderItem>
      ))}


      <AddMore onClick={() => navigate(`/store/${store.id}`)}>
        더 담기 +
      </AddMore>

      <SummarySection>
        <SummaryRow>
          <span>주문금액</span>
          <span>{orderAmount.toLocaleString()}원</span>
        </SummaryRow>

        <SummaryRow>
          <span>배달요금</span>
          <span>{deliveryFee.toLocaleString()}원</span>
        </SummaryRow>

        <SummaryRow bold>
          <span>총 결제금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </SummaryRow>
      </SummarySection>

      <MinNotice>
        최소 주문금액 {minOrderPrice.toLocaleString()}원
      </MinNotice>

      <PayButton disabled={totalPrice < minOrderPrice}>
        {totalPrice.toLocaleString()}원 결제하기
      </PayButton>
    </Container>
  );
};

export default Cart;


const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  position: relative;
`;

const CancelText = styled.div`
  position: absolute;
  right: 16px;
  top: 12px;
  font-size: 15px;
  color: #ff4d4f;
  font-weight: 600;
  cursor: pointer;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const StoreTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #222;
`;

const WarningBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #ff4d4f;
  font-size: 14px;
  font-weight: 600;

  img {
    width: 16px;
    height: 16px;
  }
`;

const OrderItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const ImagePlaceholder = styled.div`
  width: 54px;
  height: 54px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const OrderInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #334D48;
`;

const ItemDesc = styled.div`
  font-size: 13px;
  color: #6b7684;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 14px;
  color: #222;
  margin-top: 4px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Quantity = styled.div`
  font-size: 14px;
  color: #333;
`;

const ArrowIcon = styled.img`
  width: 14px;
  height: 14px;
  opacity: 0.5;
`;

const AddMore = styled.div`
  text-align: center;
  color: #2673f0;
  font-weight: 600;
  margin: 20px 0;
  cursor: pointer;
`;

const SummarySection = styled.div`
  background-color: #fff;
  padding: 20px 16px;
  border-top: 1px solid #eee;
`;

const SummaryRow = styled.div<{ bold?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: ${(props) => (props.bold ? 700 : 500)};
  color: ${(props) => (props.bold ? "#000" : "#555")};
`;

const MinNotice = styled.div`
  text-align: center;
  font-size: 13px;
  color: #666;
  margin-top: 8px;
`;

const PayButton = styled.button<{ disabled?: boolean }>`
  width: 90%;
  align-self: center;
  margin: 10px 0 40px;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: ${(props) => (props.disabled ? "#e5edff" : "#2673f0")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const EmptyContainer = styled.div`
  text-align: center;
  padding-top: 80px;
  height: 100vh;
`;

const EmptyText = styled.div`
  margin-top: 20px;
  color: #666;
  font-size: 16px;
`;
