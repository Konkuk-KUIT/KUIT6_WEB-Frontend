import useCartStore from "../../Stores/useCartStore";

const CartItem = () => {
    const menus = useCartStore((state) => state.menus);
    console.log("CartItem menus:", menus);

    const storeName = menus.length > 0 ? menus[0].storeName : "";
    console.log("CartItem storeName:", storeName);

    return (
        <div className="flex flex-col">

            {/* 가게 이름 */}
            <div className="flex justify-between p-[24px]">
                <h1 className="text-[17px] text-[#6B7684] font-bold">{storeName}</h1>
                <div className="flex gap-[6px] justify-center">
                    <h1 className="text-[15px] text-[#F04452]">최소금액 미달</h1>
                    <button><img src="/error.svg" /></button>
                </div>
            </div>

            {/* 메뉴 목록 */}
            {menus.map((menu, idx) => (
                <section
                    key={idx}
                    className="flex px-[24px] pt-[16px] pb-[16px] justify-between items-center border-b border-[#E5E8EB]"
                >
                    <div className="flex gap-[17px]">
                        <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-[8px]" />

                        <div className="flex flex-col gap-[5px]">
                            <h1 className="text-[17px] font-bold text-[#333D4B]">{menu.name}</h1>
                            <h3 className="text-[13px] text-[#6B7684]">{menu.ingredients}</h3>
                            <p className="text-[13px] text-[#6B7684]">
                                {menu.price.toLocaleString()}원
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <span className="text-[13px] text-[#6B7684]">1개</span>
                        <button><img src="/arrow2.svg" /></button>
                    </div>
                </section>
            ))}

        </div>
    );
};

export default CartItem;
