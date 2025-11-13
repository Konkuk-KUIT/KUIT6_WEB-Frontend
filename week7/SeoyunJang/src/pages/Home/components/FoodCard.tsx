interface FoodCardProps {
  foodName: string;
  imgSrc: string;
}

const FoodCard = ({ foodName, imgSrc }: FoodCardProps) => {
    return (
        <div className="w-[108px] h-[74px] rounded-[8px] bg-[#FAFAFB] flex flex-col items-center justify-center">
            <img src={imgSrc} alt="음식 사진"/>
            <span className="text-[14px] text-[#333D4B] font-semibold">{foodName}</span>
        </div>
    );
};

export default FoodCard;