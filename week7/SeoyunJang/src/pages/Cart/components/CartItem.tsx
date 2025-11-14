const CartItem = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between p-[24px]">
                <h1 className="text-[17px] text-[#6B7684] font-bold">샐로리 한남점</h1>
                <div className="flex gap-[6px] justify-center">
                    <h1 className="text-[15px] text-[#F04452]">최소금액 미달</h1>
                    <button><img src="/error.svg"/></button>
                </div>
            </div>
            <section className="flex px-[24px] pt-[7px] pb-[16px] justify-between items-center border-b border-[#E5E8EB]">
                    <div className="flex gap-[17px]">
                        <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-[8px]"></div>
                        <div className="flex flex-col gap-[5px]">
                            <h1 className="text-[17px] font-bold text-[#333D4B]">토마토 샐러드</h1>
                            <h3 className="text-[13px] text-[#6B7684]">추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</h3>
                            <p className="text-[13px] text-[#6B7684]">10,600원</p>
                        </div>
                    </div>
                    <div className="flex">
                        <span className="text-[13px] text-[#6B7684]">1개</span>
                        <button><img src="/arrow2.svg"/></button>
                    </div>
            </section>
    </div>
    );
}

export default CartItem;