import styled from "styled-components";

interface FoodCardProps {
  icon: string;
  name: string;
  onClick?: () => void;
}

function FoodCard({ icon, name, onClick }: FoodCardProps) {
  return (
    <ButtonContainer onClick={onClick}>
      <Icon src={icon} alt={icon} />
      <Label>{name}</Label>
    </ButtonContainer>
  );
}

export default FoodCard;

// style
const ButtonContainer = styled.button`
  display: flex;
  width: 108px;
  padding: 12px 0 13px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 8px;
  background: #fafafb;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const Label = styled.span`
  color: #333d4b;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
