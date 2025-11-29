import vector from "../../assets/vector.svg";

interface Menu {
    id: number,
    name: string;
    price: number;
    ingredients: string;
    quantity: number;
}

interface MenuItemProps {
    menu: Menu;
}

const OrderMenu = ({ menu }: MenuItemProps) => {
    return (
        <div className="flex justify-between border-b-[1px] border-[#E5E8EB]">
            <div className="flex flex-row items-start justify-left mt-[16px] mb-[16px]">
                <img src="https://placehold.co/54x54" alt="메뉴이미지" className="rounded-[8px] ml-[24px] mr-[16px]" />
                <div className="flex flex-col gap-[5px] mr-[30px] w-[210px]">
                    <h3 className="text-[17px] text-[#333D4B] font-[600]">
                        {menu.name}
                    </h3>
                    <span className="text-[13px] text-[#6B7684]">{menu.price.toLocaleString()}</span>
                    <p className="text-[13px] text-[#6B7684]">{menu.ingredients}</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-[14px]">
                <div className="text-[15px] text-[#6B7684]">{menu.quantity}</div>
                <img src={vector} alt="vector" />
            </div>
        </div>
    );
};

export default OrderMenu;