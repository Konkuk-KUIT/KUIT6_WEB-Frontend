import styled from "styled-components";
import backIcon from "../../assets/store/back.svg";

const Header = () => {
  return (
    <Container>
      <BackButton>
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