// src/pages/Store/Store.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import StoreList from "../../components/MenuItem/StoreList";
import OrderBar from "../../components/OrderBar/OrderBar";

interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus?: any[];
}

const Store = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);

  // GET
  const fetchStores = () => {
    fetch("http://localhost:3001/stores")
      .then((res) => res.json())
      .then((data) => setStores(data));
  };

  // POST
  const handleAddStore = () => {
    const newName = prompt("추가할 가게 이름을 입력하세요");

    if (!newName || newName.trim() === "") return;

    const newStore = {
      name: newName,
      rate: 4.5,
      reviewCnt: 0,
      minDeliveryTime: 15,
      maxDeliveryTime: 30,
      minDeliveryPrice: 10000,
      deliveryFee: 2000,
      menus: [],
    };

    fetch("http://localhost:3001/stores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStore),
    })
      .then(fetchStores)
      .catch((err) => console.error("추가 실패:", err));
  };


  // PATCH
  const handleEditStore = (id: number, name: string) => {
    const newName = prompt("새 가게 이름을 입력하세요", name);

    // 취소 눌렀거나 빈 문자열일 때 종료
    if (!newName || newName.trim() === "") return;

    fetch(`http://localhost:3001/stores/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    })
      .then(fetchStores)
      .catch((err) => console.error("수정 실패:", err));
  };


  // DELETE
  const handleDeleteStore = (id: number) => {
    fetch(`http://localhost:3001/stores/${id}`, {
      method: "DELETE",
    }).then(fetchStores);
  };

  // 초기 로딩
  useEffect(() => {
    fetchStores();
  }, []);

  return (
    <>
      <div className="mb-[114px]">
        <img
          src={arrow}
          alt="이전"
          className="ml-[10px] mt-[54px]"
          onClick={() => {
            navigate("/");
          }}
        />

        <div className="mt-[26px] ml-[24px] text-[26px] font-bold">
          샐러드
        </div>

        <div>
          {stores.map((store) => (
            <StoreList
              key={store.id}
              {...store}
              onDelete={handleDeleteStore}
              onEdit={handleEditStore}
            />
          ))}
        </div>

        <div className="mt-[24px] mx-[24px]">
          <button
            onClick={handleAddStore}
            className="w-full py-[14px] rounded-[16px] bg-[#F2F4F6] text-[18px] font-[600] text-[#3182F6]"
          >
            + 추가
          </button>
        </div>
      </div>
      <OrderBar />
    </>
  );
};

export default Store;
