import StoreCard from "../../components/StoreCard/StoreCard";
import TopSpace from "../../components/Space/TopSpace";
import OrderBar from "../../components/OrderBar/OrderBar";
import type { Menu } from "../../components/MenuItem/MenuItem";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import Previous from "../../components/Previous/Previous";
import { Page } from "../Home/Home";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/stores";

const createStores = async () => {
  const storeName = prompt("가게 이름을 입력하세요");

  const newStore = {
    name: storeName,
    rate: 4.7,
    reviewCnt: 2451,
    minDeliveryTime: 15,
    maxDeliveryTime: 25,
    minDeliveryPrice: 12000,
    deliveryFee: 2500,
    category: "salad",
    menus: [],
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStore),
  });
  if (!res.ok) throw new Error("생성 실패");
  return res.json();
};

interface IStore {
  id: string;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: Menu[];
  category?: string;
}

const Stores = ({ category }: { category: string }) => {
  const [stores, setStores] = useState<IStore[]>([]);

  const getStores = async (): Promise<IStore[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("불러오기 실패");
    return await res.json();
  };

  useEffect(() => {
    getStores().then(setStores).catch(console.error);
  }, []);

  const AddStores = async () => {
    try {
      const created = await createStores();
      setStores((prev) => [...prev, created]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("삭제 실패");
    const next = await getStores();
    setStores(next);
  };

  const handleEdit = async (id: string) => {
    const name = prompt("수정할 이름을 입력하세요");
    if (name === null) return; // 취소
    const trimmed = name.trim();
    if (!trimmed) return;

    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: trimmed }),
    });
    if (!res.ok) throw new Error("생성 실패");
    const updated = await res.json();
    const next = await getStores();
    setStores(next);
    return updated;
  };

  return (
    <Page paddingbottomheight={111}>
      <TopSpace child={<Previous />} />
      <HeadTitle className="flex justify-start items-end mb-[0px] mt-[26px] mx-[20px]">
        {category}
      </HeadTitle>
      {stores.map((store) => (
        <StoreCard
          key={store.id}
          store={store}
          handleEdit={() => handleEdit(store.id)}
          handleDelete={() => handleDelete(store.id)}
        />
      ))}
      <button onClick={AddStores}>가게 추가하기</button>
      <OrderBar />
    </Page>
  );
};

export default Stores;
export type { IStore };
