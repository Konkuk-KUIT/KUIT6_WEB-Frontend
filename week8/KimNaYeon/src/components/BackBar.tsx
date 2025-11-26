import styled from "styled-components";
import BackButton from "../../public/arrow.svg"
import { useNavigate } from "react-router-dom";
import useCartStore from "../pages/Store/useCartStore";

type BackBarProp = {
    orderCancel: boolean;
}

const BackBar = ({orderCancel} : BackBarProp) => {
    const navigate = useNavigate();
    const clearItems = useCartStore((state) => state.clearItems);

    return (
        <StyledBackBar>
            <img onClick={() => navigate(-1)} src={BackButton} alt="BackButton"/>
            {orderCancel && (<StyledOrderCancel onClick={() => {clearItems(); navigate("/store");}}>주문취소</StyledOrderCancel>)}
        </StyledBackBar>
    );
};

const StyledBackBar = styled.div`
    width: 390px;
    height: 41px;
    padding: 0 15px 0 10px;
    box-sizing: border-box;
    background: #fff;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledOrderCancel = styled.span`
    color: #333D4B;
    font-size: 16px;
    font-weight: 600;
`;

export default BackBar;