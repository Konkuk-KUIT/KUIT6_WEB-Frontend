import styled from "styled-components";

const CategoryTitle = styled.h1`
    margin: 10px 0px;
    font: Pretendard;
    font-size: 26px;
    font-style: bold;
    font-weight: 700;
    color: #191F28;
    overflow: hidden;

`

const AddressText = styled.button`
    border: none;
    background: none;
    padding: 0;
    outline: none;
    box-shadow: none;
    font: Predendard;
    font-size: 17px;
    font-weight: 500;
    color: #333D48;

`

const DeliveryTextBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
`

const DeliveryTitle = ({address}: {address: string}) => {
    return (
        <DeliveryTextBox>
            <CategoryTitle>오늘은 무엇을 먹을까요?</CategoryTitle>
            <AddressText>{address}(으)로 배달 &gt;</AddressText>
        </DeliveryTextBox>
    )
}

export default DeliveryTitle;