// src/pages/Store/Stores.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import colorStar from "../../assets/colorStar.svg";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: Menu[];
}

const Stores = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/stores/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("가게 불러오기 실패");
        }
        return res.json();
      })
      .then((data: Store) => setStore(data))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!store) {
    return <div>가게 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <div className="mb-[114px]">
        <img
          src={arrow}
          alt="이전"
          className="ml-[10px] mt-[54px]"
          onClick={() => navigate("/store")}
        />
        <div className="mt-[26px] ml-[24px] text-[26px] font-bold">
          {store.name}
        </div>

        <div className="ml-[23px] mt-[6px]">
          <img
            src={colorStar}
            alt="평점"
            className="inline mr-[1px]"
          />
          <span className="text-[17px] font-[600] text-[#4E5968]">
            {store.rate}
          </span>
          <span className="ml-[9px] font-[600] text-[17px] text-[#4E5968]">
            리뷰 {store.reviewCnt.toLocaleString()}
          </span>
        </div>

        <div className="mt-[12px] ml-[24px] flex flex-col gap-[9px] text-[15px] text-[#4E5968] font-[500]">
          <p className="flex flex-row gap-[12px]">
            <span>결제방법</span>
            <span>토스결제만 현장결제 안됨</span>
          </p>
          <p className="flex flex-row gap-[12px]">
            <span>최소주문</span>
            <span>{store.minDeliveryPrice.toLocaleString()}</span>
          </p>
          <p className="flex flex-row gap-[12px]">
            <span>배달시간</span>
            <span>
              약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
            </span>
          </p>
        </div>

        <hr className="text-[#E5E8EB] mt-[14px] mb-[26px]" />

        <div className="text-[17px] font-[600] text-[#6B7684] ml-[24px] mb-[11px]">
          샐러드
        </div>

        <div>
          {store.menus.map((menu) => (
            <MenuItem
              key={menu.id}
              id={menu.id}
              name={menu.name}
              price={menu.price}
              ingredients={menu.ingredients}
              isBest={menu.isBest}
              storeId={store.id}
              storeName={store.name}
              deliveryFee={store.deliveryFee}
              minDeliveryPrice={store.minDeliveryPrice}
            />
          ))}
        </div>
      </div>
      <OrderBar />
    </>
  );
};

export default Stores;
