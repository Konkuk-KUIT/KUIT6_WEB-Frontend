import styled from "styled-components"
import Button from "../Button";

interface BarSize {
    barH: number;
}

const Bar = styled.div<BarSize>`
    height: ${(props) => props.barH}px
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    border-radius: 16px 16px 0px 0px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.15);
    padding: 1rem 1.5rem;
    box-sizing: border-box;
`

const OrderBar = () => {
    return (
        <Bar barH={111}>
            <div>
                <span style={{color:"#6B7684"}}>총 주문금액</span>
                <br/>
                <span style={{color:"#4E5968"}}>12,100원</span>
            </div>
            <Button children="주문하기" size="lg" disabled={false}></Button>
        </Bar>
    )
}

export default OrderBar;
export { Bar }