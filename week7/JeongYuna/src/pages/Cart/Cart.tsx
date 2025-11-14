import Before from "../../components/Before/Before";
import PayBar from "../../components/PayBar/PayBar";
import BorderSpace from "../../components/Space/BorderSpace";
import TopSpace from "../../components/Space/TopSpace";
import { Page } from "../Home/Home";
import type { Menu } from "../Store/Store";

const QuitOrderButton = () => {
  return (
    <div className="w-[100%] flex flex-row justify-between">
      <Before />
      <button
      className="bg-transparent border-none p-0 m-0
                focus:outline-none active:outline-none 
                focus:ring-0 active:ring-0 cursor-pointer
                text-[16px] text-[#333D4B] font-[600] font-pretendard ">
        주문취소
      </button>
    </div>
  )
}

interface OrderInfoProps {
  k: String;
  kStyle: string;
  value: number | String;
  vStyle: string;
}

const OrderInfo = ({k, kStyle, value, vStyle}: OrderInfoProps) => {
  return (
    <div className="flex flex-row justify-between">
      <span className={kStyle}>{k}</span>
      <span className={vStyle}>{value}원</span>
    </div>
  )
}// {store}:{store:IStore}

interface OrderMenu {
  menu: Menu;
  options: String;
  additionalFee: number;
}

const OrderItem = ({menu, options, additionalFee}:OrderMenu) => {
  return (
    <div className="flex flex-row items-center gap-[1rem] p-[1rem]">
      <img src="https://placehold.co/54x54?text=\n" className="rounded-[8px] m-[0.2rem]"/>
      <div className="flex flex-row justify-start items-start m-[0px] flex-1 text-left">
        <div className="flex flex-col gap-[0.5rem]"><h3 className="text-[17px] text-[#333D48] font-[600] font-pretendard p-[0px] m-[0px]">{menu.name}</h3>
          <p className="text-[13px] text-[#6B7684] font-[500] font-pretendard p-[0px] m-[0px]">{options}</p>
          <span className="text-[13px] text-[#6B7684] font-[500] font-pretendard p-[0px] m-[0px]">{menu.price + additionalFee}원</span>
        </div>
      </div>
      <button className="appearance-none bg-transparent border-none p-0 m-0 outline-none focus:outline-none active:outline-none cursor-pointer flex items-center gap-1">
        <span>1개</span>
        <img src="/src/assets/more.svg" className="w-[16px] h-[16px]"></img>
      </button>
    </div>
  )
}

const Cart = () => {
  const menu = {
    id: 1,
    name: "토마토 샐러드",
    isBest: true,
    price: 7600,
    ingredients: "계란, 옥수수, 양파, 올리브, 베이컨, 시저드레싱",
  }

  return (
    <Page bottomH={129}>
      <TopSpace child={<QuitOrderButton />} />
      <BorderSpace />
      <div>
        <div className="flex flex-row justify-between items-center px-[24px]">
          <h3 className="text-[17px] text-[#6B7684] font-[700] font-pretendard">샐로리 한남점</h3>
          <span className="text-[15px] text-[#F04452] font-[500] font-pretendard flex flex-row items-center gap-[0.3rem]">최소금액 미달<img src="/src/assets/warning.svg" /></span>
        </div>
        <OrderItem menu={menu} options={"추천소스, 채소볼, 베이컨추가, 시저드드레싱 추가"} additionalFee={3000}/>
        <div className="border-b-1 border-b-[#E5E8EB]"></div>
        <button className="bg-transparent border-none p-0 m-0
                focus:outline-none active:outline-none 
                focus:ring-0 active:ring-0 cursor-pointer
                border-b-1 boreder-b-[#E5E8EB] text-[17px] text-[#3182F6] font-[600] font-pretendard">
          더 담기 +
        </button>
      </div>
      <BorderSpace />
      <div className="flex flex-col p-[1.5rem] gap-[0.5rem]">
        <OrderInfo k="주문금액" kStyle="text-17px text-[#8B95A1] font-[500] font-pretendard" value="10600" vStyle="text-17px text-[#505967] font-[500] font-pretendard"></OrderInfo>
        <OrderInfo k="배달요금" kStyle="text-17px text-[#8B95A1] font-[500] font-pretendard" value="2000" vStyle="text-17px text-[#505967] font-[500] font-pretendard"></OrderInfo>
        <OrderInfo k="총 결제금액" kStyle="text-17px text-[#4E5968] font-[500] font-pretendard pt-[0.5rem]" value="12600" vStyle="text-17px text-[#4E5968] font-[600] font-pretendard pt-[0.5rem]"></OrderInfo>
      </div>
      <PayBar />
    </Page>
  )
};

export default Cart;
