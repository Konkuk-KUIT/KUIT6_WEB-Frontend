import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface MenuDetailProps {
  icon: string;
  label: string;
}

const MenuDetail = ({ icon, label }: MenuDetailProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };

  return (
    <Wrapper onClick={handleClick}>
      <Icon src={icon} alt={label} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default MenuDetail;

const Wrapper = styled.div`
  background: #FAFAFB;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #F2F4F6;
    transform: translateY(-2px);
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const Label = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #333D4B;
`;