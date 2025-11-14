import StoreCard from "../../components/StoreCard/StoreCard"
import TopSpace from "../../components/Space/TopSpace";
import OrderBar from "../../components/OrderBar/OrderBar";
import type { Menu } from "../Store/Store";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import Before from "../../components/Before/Before";
import { Page } from "../Home/Home";

interface IStore {
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
  stores: IStore[],
}

const Stores = ( {stores}: {stores: StoresProps} ) => {
  return (
    <Page bottomH={111}>
      <TopSpace child={<Before />}></TopSpace>
      <HeadTitle className="flex justify-start items-end mb-[0px] mt-[26px] mx-[20px]">{stores.category}</HeadTitle>
        {stores.stores.map( (store) =>
          <StoreCard store={store}></StoreCard>
        )}
      <OrderBar />
    </Page>
  )
};

export default Stores;

export type {IStore};

export type {StoresProps}