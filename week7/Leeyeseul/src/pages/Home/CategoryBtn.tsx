import styled from "styled-components";

interface Props {
  label: string;
  imageSrc?: string;
  isMore?: boolean;
}

const CategoryButton = ({ label, imageSrc, isMore }: Props) => {
  return (
    <Box>
      {isMore ? (
        <Dots>
          <span />
          <span />
          <span />
        </Dots>
      ) : (
        imageSrc && <img src={imageSrc} alt={label} />
      )}
      <p>{label}</p>
    </Box>
  );
};

export default CategoryButton;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #f5f7fb;
  border-radius: 12px;
  padding: 12px 0;

  color: #000;
  text-decoration: none;
  cursor: default; 

  img {
    width: 28px;
    height: 28px;
  }

  p {
    margin-top: 4px;
    font-size: 13px;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 4px;

  span {
    width: 4px;
    height: 4px;
    background: #868e96;
    border-radius: 50%;
  }
`;
