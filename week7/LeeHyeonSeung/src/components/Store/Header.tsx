import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/store/back.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <BackButton onClick={handleBack}>
        <BackIcon src={backIcon} alt="back" />
      </BackButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: relative;
  height: 60px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 30px;
  left: 10px;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`;