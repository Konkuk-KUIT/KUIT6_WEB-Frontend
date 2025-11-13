import Button from "../Button";

interface FoodItemProps {
    name:string;
    isBest: boolean;
    price: string;
    ingredients: string;
}

const FoodItem = ({ name, isBest , price, ingredients }: FoodItemProps) => {
    return(
        <div className="flex justify-between items-center gap-[19px] px-[24px]">

            <section className="flex items-center gap-[16px] pt-[16px]">
                <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-full"></div>

                <div className="w-[200px] flex flex-col">
                    <h1>
                        <span className="text-[17px] text-[#333D4B] font-semibold">{name}</span> 
                        {isBest ? (<span className="text-[17px] text-[#3182F6] font-semibold"> BEST</span>) : null}
                    </h1>
                    <h3 className="text-[13px] text-[#6B7684]">{price}</h3>
                    <p className="text-[13px] text-[#6B7684] whitespace-pre-line">{ingredients}</p>
                </div>
            </section>

            <div>
                <Button type="button" size="sm">담기</Button>
            </div>

        </div>
        
    );
}

export default FoodItem;