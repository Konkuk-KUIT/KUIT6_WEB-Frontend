import Button from "../../../shared/Button";
import useCartStore from "../useCartStore";

interface FoodItemProps {
    name:string;
    isBest: boolean;
    price: number;
    ingredients: string;
    storeName : string;
    storeId: number;
}
 
const FoodItem = ({ name, isBest , price, ingredients, storeName,storeId }: FoodItemProps) => {
    const menus = useCartStore((state) => state.menus); 
    const addMenu = useCartStore((state) => state.addMenu);
    const handleAddMenu = () => {

        if (menus.length > 0) {
            const currentStoreId = menus[0].storeId;

            if (currentStoreId !== storeId) {
                alert("다른 가게 메뉴는 같이 담을 수 없어요!");
                return;
            }
        }

        addMenu({ name, price ,ingredients, storeName, storeId })
    }



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

            <div onClick={handleAddMenu}>
                <Button type="button" size="sm">담기</Button>
            </div>

        </div>
        
    );
}

export default FoodItem;