import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItem from "../../components/StoreItem/StoreItem";
import { stores } from "../../models/stores";
import left_chevron from "../../assets/left_chevron.svg";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-[10px] ml-[17px]">
        <img onClick={() => navigate("/")} src={left_chevron} alt="뒤로가기" />
      </div>
      <div className="mt-[26px] ml-[24px] color-[#191F28] text-[26px] font-bold">
        샐러드
      </div>
      {stores.map((item) => (
        <div onClick={() => navigate(`/store/${item.id}`)}>
          <StoreItem
            id={item.id}
            name={item.name}
            rate={item.rate}
            reviewCnt={item.reviewCnt}
            minDeliveryTime={item.minDeliveryTime}
            maxDeliveryTime={item.maxDeliveryTime}
            deliveryFee={item.deliveryFee}
          />
        </div>
      ))}

      <OrderBar />
    </div>
  );
};

export default Store;
