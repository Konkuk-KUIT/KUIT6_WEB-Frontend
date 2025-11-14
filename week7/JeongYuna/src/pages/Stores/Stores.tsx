import StoreCard from "../../components/StoreCard/StoreCard"
import TopSpace from "../../components/Space/TopSpace";
import BottomBar from "../../components/BottomBar/BottomBar";
import type { Menu } from "../Store/Store";
import HeadTitle from "../../components/HeadTitle/HeadTitle";

interface Store {
  id: number,
  name: String,
  rate: number,
  reviewCnt: number,
  minDeliveryTime: number,
  maxDeliveryTime: number,
  minDeliveryPrice: number,
  deliveryFee: number,
  menus: Menu[]
}

interface StoresProps {
  category: string,
  stores: Store[],
}

const Stores = ( {stores}: {stores: StoresProps} ) => {
  return (
    <>
      <TopSpace child={<img src="/src/assets/before.svg" style={{margin: " 0 0 0 10px"}}/>}></TopSpace>
      <HeadTitle  className="flex justify-start items-end mb-[0px] mt-[26px] mx-[20px]">{stores.category}</HeadTitle>
        {stores.stores.map( (store) =>
          <StoreCard store={store}></StoreCard>
        )}
      <BottomBar />
    </>
  )
};

export default Stores;

export type {Store};