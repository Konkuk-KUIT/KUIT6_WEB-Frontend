import { Bar } from "../OrderBar/OrderBar"
import Button from "../Button";

const PayBar = () => {
    return (
        <Bar barheight={129}>
            <div className="flex flex-col justify-center items-center w-full">
                <span className="flex flex-row text-[17px] text-[#6B7684] font-[500] font-pretendard mb-[1rem]">최소 주문금액 13,000원</span>
                <Button children="12,600원 결제하기" size="xl" disabled={true}></Button>
            </div>
        </Bar>
    )
}

export default PayBar;