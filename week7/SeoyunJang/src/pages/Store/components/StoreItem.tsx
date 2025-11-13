import { useNavigate } from "react-router-dom";

interface StoreItemProps {
  rank?: string;
  storeName: string;
  isStared: boolean;
  review: string;
  description: string;
}

const StoreItem = ({ rank, storeName, isStared, review, description }: StoreItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (storeName === "샐로리 한남점") {
      navigate("/stores"); // 나중에 페이지 않아지면 아이디 받아서 그쪽으로 인도하기...?
    }
  };

  return (
      <div className="py-[16px] px-[24px] flex gap-[17px] hover:bg-[#f9f9f9] transition" onClick={handleClick}>
          {/* 썸네일 */}
          <div className="h-[54px] w-[54px] bg-[#ECECEC] rounded-[8px]"></div>

          {/* 텍스트 전체 */}
          <div className="flex flex-col gap-[5px]">
              {/* 몇위 + 가게명 묶음 */}
              <div className="flex flex-col gap-[2px]">
                  <h1 className="text-[17px] text-[#333D4B] font-semibold">{rank && rank}</h1>
                  <h2 className="text-[17px] text-[#333D4B] font-semibold">{storeName}</h2>
              </div>

              {/* 별 + 리뷰 + 설명 묶음 */}
              <div className="flex flex-col gap-[4px]">
                  <p className="text-[13px] text-[#6B7684] flex gap-[1.5px]">
                      <img 
                          src={isStared ? "/star.svg" : "/graystar.svg"}
                          alt="star"/>
                      {review}
                  </p>
                  <p className="text-[13px] text-[#6B7684]">{description}</p>
              </div>
          </div>
      </div>
  );
};

export default StoreItem;
