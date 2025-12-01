import star from "../../assets/star.svg";
import { useNavigate } from "react-router-dom";

type StoreInfo = {
    id: number,
    name: string,
    rate: number,
    reviewCnt: number,
    minDeliveryTime: number,
    maxDeliveryTime: number,
    deliveryFee: number,
    onDelete: (id: number) => void,
    onEdit: (id: number, name: string) => void
};

const StoreList = ({ id, name, rate, reviewCnt, minDeliveryTime, maxDeliveryTime, deliveryFee, onDelete, onEdit }: StoreInfo) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row items-start pt-[24px]">
            <div className="flex flex-row items-start" onClick={() => navigate(`/store/${id}`)}>
                <img src="https://placehold.co/54x54" alt="가게이미지" className="rounded-[8px] ml-[24px] mr-[17px]" />
                <div className="flex flex-col">
                    {id <= 3 && <p className="text-[17px] font-[600] mb-[2px]">{id}위</p>}
                    <p className="text-[17px] font-[600] mb-[5px]">{name}</p>
                    <p className="text-[13px] font-[500] text-[#6B7684] mb-[4px] flex flex-row items-center gap-[1px]"><img src={star} alt="별점" className="inline" /><span>{rate} ({reviewCnt.toLocaleString()})</span></p>
                    <p className="text-[13px] font-[500] text-[#6B7684] mb-[17px]">{minDeliveryTime}분~{maxDeliveryTime}분∙배달비 {deliveryFee.toLocaleString()}원</p>
                </div>
            </div>
            <div className="flex flex-row gap-[8px]">
                <button onClick={() => onEdit(id, name)} className="text-blue-600 text-sm">수정</button>
                <button onClick={() => onDelete(id)} className="text-red-500 text-sm">삭제</button>
            </div>
        </div>
    )
}

export default StoreList;