import { Link } from "react-router-dom";

const CartHeader = () => {
    return (    
        <div>
            <div className="flex justify-between p-[10px] border-b-[16px] border-[#F2F4F6]">
                <Link to="/stores">
                    <button><img src="/arrow.svg" alt="화살표" /></button>
                </Link>
                <Link to="/">
                    <h3 className="mr-[5px] font-semibold text-[16px] text-[#333D4B]">주문취소</h3>
                </Link>
            </div>
        </div>
    );  
}

export default CartHeader;