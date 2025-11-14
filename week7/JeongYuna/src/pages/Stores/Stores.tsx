import StoreCard from "../../components/StoreCard/StoreCard"
import TopSpace from "../../components/Space/TopSpace";
import BottomBar from "../../components/BottomBar/BottomBar";
import type { Menu } from "../Store/Store";

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
      <h1 className="text-[26px] font-[700] flex justify-start items-end mb-[0px] mt-[26px] mx-[24px]">{stores.category}</h1>
      <div>
        {stores.stores.map( (store) =>
          <StoreCard store={store}></StoreCard>
        )}
      </div>
      <BottomBar />
    </>
  )
};

export default Stores;

export type {Store};