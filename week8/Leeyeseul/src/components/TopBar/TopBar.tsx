import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  showBottomBorder?: boolean;
  rightText?: string;
  onRightClick?: () => void; 
}

const TopBar = ({ showBottomBorder = false, rightText, onRightClick }: Props) => { 
  const navigate = useNavigate();

  const handleBack = () => {  
    navigate(-1);
  };

  return (
    <Wrapper $withBorder={showBottomBorder}>
      <BackIcon onClick={handleBack}>〈</BackIcon> 
      <TitleArea />
      <RightText onClick={onRightClick}>{rightText}</RightText> 
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div<{ $withBorder: boolean }>`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;

  background-color: #ffffff;
  border-bottom: ${({ $withBorder }) =>
    $withBorder ? "1px solid #e9ecef" : "none"};
`;

const BackIcon = styled.span`
  font-size: 22px;
  line-height: 1;
  cursor: default;
`;

const TitleArea = styled.div`
  flex: 1; 
`;

const RightText = styled.span`
  font-size: 14px;
  color: #000000ff;
  font-weight: 500;
  cursor: pointer; 
`;
