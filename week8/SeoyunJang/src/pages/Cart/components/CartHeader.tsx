import useCartStore from "../../Stores/useCartStore";
import { useNavigate } from "react-router-dom";

const CartHeader = () => {
    const navigate = useNavigate();

    const clearMenu = useCartStore((state) => state.clearMenu);

    const handleCancel = () => {
        clearMenu();      // 장바구니 비우기!!
        navigate("/store");
    };
    
    return (    
        <div>
            <div className="flex justify-between p-[10px] border-b-[16px] border-[#F2F4F6]">
                <button onClick={() => navigate(-1)}><img src="/arrow.svg" alt="화살표" /></button>
                <div onClick={handleCancel}>
                    <h3 className="mr-[5px] font-semibold text-[16px] text-[#333D4B]">주문취소</h3>
                </div>
            </div>
        </div>
    );  
}

export default CartHeader;