import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import stores from "../../models/stores";
import StoreList from "../../components/MenuItem/StoreList";
import OrderBar from "../../components/OrderBar/OrderBar";

const Store = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-[114px]">
        <img src={arrow} alt="이전" className="ml-[10px] mt-[54px]" onClick={()=>{navigate('/')}}/>
        <div className="mt-[26px] ml-[24px] text-[26px] font-bold">샐러드</div>
        <div>
          {stores.map((store) => (
            <StoreList key={store.id} id={store.id} name={store.name} rate={store.rate} reviewCnt={store.reviewCnt}
              minDeliveryTime={store.minDeliveryTime} maxDeliveryTime={store.maxDeliveryTime} deliveryFee={store.deliveryFee} />
          ))}
        </div>
      </div>
      <OrderBar />
    </>
  )
};

export default Store;