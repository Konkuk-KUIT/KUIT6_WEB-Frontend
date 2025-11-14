import styled from "styled-components";

interface MenuDetailProps {
  icon: string;
  label: string;
}

const MenuDetail = ({ icon, label }: MenuDetailProps) => {
  return (
    <Wrapper>
      <Icon src={icon} alt={label} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default MenuDetail;

const Wrapper = styled.div`
  width: 108px;
  height: 74px;
  background: #FAFAFB;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const Icon = styled.img`
  width: 28;
  height: 28;
  top: 12px;
  left: 40px;
  angle: 0 deg;
  opacity: 1;
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