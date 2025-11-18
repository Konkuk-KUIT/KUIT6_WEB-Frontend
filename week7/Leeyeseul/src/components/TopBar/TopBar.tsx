import styled from "styled-components";

interface Props {
  showBottomBorder?: boolean;
  rightText?: string;
}

const TopBar = ({ showBottomBorder = false, rightText }: Props) => {
  return (
    <Wrapper $withBorder={showBottomBorder}>
      <BackIcon>〈</BackIcon>
      <TitleArea />
      <RightText>{rightText}</RightText> {}
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
`;
