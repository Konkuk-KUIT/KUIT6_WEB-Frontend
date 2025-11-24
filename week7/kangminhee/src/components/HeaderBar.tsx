import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

interface HeaderBarProps {
  onBack?: () => void;
}

const HeaderBar = ({ onBack }: HeaderBarProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();    
    } else {
      navigate(-1); // 뒤로가기
    }
  };
  return (
    <HeaderContainer>
      <ArrowButton onClick={handleBack}>
        <img src={arrow} alt="뒤로가기" />
      </ArrowButton>
    </HeaderContainer>
  );
};

export default HeaderBar;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  background-color: #fff;
`;

const ArrowButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;
