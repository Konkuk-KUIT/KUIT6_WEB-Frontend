import styled from "styled-components";
import GrayStar from "../../public/graystar.svg";
import { Link } from "react-router-dom";

type Props = {
  items: {id:number, name:string, rate:number, reviewCnt:number, minDeliveryTime:number, maxDeliveryTime:number, deliveryFee:number}[];
}

const StoreItem = ({items}: Props) => {
  return (
    <StyledStoreItems>
      {items.map(({id, name, rate, reviewCnt, minDeliveryTime, maxDeliveryTime, deliveryFee}) => (
        <StyledLink to={`/store/${id}`} key={id}>
            <StyledStoreItem>
                <StyledStoreImage/>
                <StyledStoreItemDesc>
                    <StyledStoreName>
                        {id < 4 && (
                            <span>{id}위</span>
                        )}
                        <span>{name}</span>
                    </StyledStoreName>
                    <StyledStoreReview>
                        <img src={GrayStar} alt="ratestar"/>
                        <span>{rate} ({reviewCnt.toLocaleString()})</span>
                    </StyledStoreReview>
                    <StyledStoreDelivery>
                        <span>{minDeliveryTime}분~{maxDeliveryTime}분 ∙ 배달비 {deliveryFee.toLocaleString()}원</span>
                    </StyledStoreDelivery>
                </StyledStoreItemDesc>
            </StyledStoreItem>
        </StyledLink>
      ))}
    </StyledStoreItems>
  );
};

const StyledStoreItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
    margin-top: 100px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
`;

const StyledStoreItem = styled.div`
    width: 390px;
    padding: 16px 0 17px 24px;
    box-sizing: border-box;
    display: flex;
    gap: 17px;
`;

const StyledStoreImage = styled.div`
    width: 54px;
    height: 54px;
    border-radius: 8px;
    background: #ECECEC;
`;

const StyledStoreItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StyledStoreName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: #333D4B;
    font-size: 17px;
    font-weight: 600;
`;

const StyledStoreReview = styled.div`
    display: flex;
    gap: 1px;
    color: #6B7684;
    font-size: 13px;
    font-weight: 500;
`;

const StyledStoreDelivery = styled.div`
    color: #6B7684;
    font-size: 13px;
    font-weight: 500;
`;

export default StoreItem;