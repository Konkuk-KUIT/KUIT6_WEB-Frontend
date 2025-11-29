import StoreCard from "../../components/StoreCard/StoreCard";
import TopSpace from "../../components/Space/TopSpace";
import OrderBar from "../../components/OrderBar/OrderBar";
import type { Menu } from "../../components/MenuItem/MenuItem";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import Previous from "../../components/Previous/Previous";
import { Page } from "../Home/Home";
import { useEffect, useState } from "react";
import { postStores, getStores, patchStore, deleteStore } from "../../api/api";
import { Navigate, useParams } from "react-router-dom";

interface IStore {
  id: number;
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

const Stores = () => {
  const { category } = useParams<{ category: string }>();
  if (!category) return <Navigate to="/" replace />

  const [stores, setStores] = useState<IStore[]>([]);
  const typedStores = stores?.map((store) => store as IStore);
  const rankedStores = [...typedStores].sort((a,b) => (b.rate - a.rate < 0)? -1 : (b.reviewCnt - a.reviewCnt));

  useEffect(() => {
    getStores().then(setStores).catch(console.error);
  }, []);

  const onAddStore = (store: IStore) => {
    postStores(store)
      .then((data) => {
        setStores((prevStores) => [...prevStores, data]);
      })
      .catch(console.error);
  };

  const onChangeStore = ({ store, newName, }: { store: IStore; newName: string;}) => {
    const updatedStore = { ...store, name: newName };
    const newStores = stores.map((s) => {
      if (s.id === store.id) {
        return { ...s, name: newName };
      }
      return s;
    });
    patchStore(updatedStore)
      .then(() => setStores(newStores))
      .catch(console.error);
  };

  const onDeleteStore = (id: number | string) => {
    deleteStore(id)
      .then(() => {
        setStores((prev) => prev.filter((s)=>s.id != id))
      })
      .catch(console.error);
  };

  return (
    <Page paddingbottomheight={111}>
      <TopSpace child={<Previous />} />
      <HeadTitle className="flex justify-start items-end mb-[0px] mt-[26px] mx-[20px]">
        {category}
      </HeadTitle>
      {rankedStores.map((store, idx) => (
        <StoreCard
          key={store.id}
          rank={idx + 1}
          store={store}
          onChangeStore={onChangeStore}
          onDeleteStore={onDeleteStore}
        />
      ))}
      <OrderBar />
    </Page>
  );
};

export default Stores;
export type { IStore };
