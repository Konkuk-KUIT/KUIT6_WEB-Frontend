import { Link } from "react-router-dom";

interface StoreListItemProps {
  ranking: number;
  store: {
    id: number;
    name: string;
    rate: number;
    reviewCnt: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    deliveryFee: number;
  };
}

export default function StoreListItem({ ranking, store }: StoreListItemProps) {
  return (
    <Link to={`/store/${store.id}`} className="flex gap-4 py-4 border-b border-gray-100">
      <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-lg" />

      <div className="flex flex-col">
        <p className="text-[17px] text-[#333D4B] font-semibold">{ranking}위</p>

        <p className="text-[17px] font-semibold text-[#333D4B]">{store.name}</p>

        <p className="text-[13px] text-[#6B7684]">
          ★ {store.rate} ({store.reviewCnt.toLocaleString()})
        </p>

        <p className="text-[13px] text-[#6B7684]">
          {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비 {store.deliveryFee.toLocaleString()}원
        </p>
      </div>
    </Link>
  );
}
