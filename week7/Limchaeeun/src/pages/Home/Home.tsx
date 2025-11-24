import FoodCard from "../../components/Home/FoodCard";
import OrderBar from "../../components/OrderBar/OrderBar";
import { categories } from "../../models/food";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const rows = [];
  for (let i = 0; i < categories.length; i += 3) {
    rows.push(categories.slice(i, i + 3));
  }

  return (
    <Container>
      <HeaderSection>
        <Title>오늘은 무엇을 먹을까요?</Title>
        <SubText>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</SubText>
      </HeaderSection>

      <FoodGrid>
        {rows.map((row, rowIndex) => (
          <FoodRow key={rowIndex}>
            {row.map((food) => (
              <FoodCard
                key={food.id}
                icon={food.icon}
                name={food.name}
                onClick={() => navigate("/store")}
              />
            ))}
          </FoodRow>
        ))}
      </FoodGrid>
      <OrderBar />
    </Container>
  );
};

export default Home;

// style
const Container = styled.div`
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 111px;
  background: #fff;
`;

const HeaderSection = styled.div`
  display: inline-flex;
  padding: 25px 68px 4px 24px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 88px;
  gap: 13px;
`;

const Title = styled.h1`
  color: #191f28;
  font-family: Pretendard;
  font-size: 26px;
  margin: 0;
`;

const SubText = styled.p`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  margin: 0;
`;

const FoodGrid = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 70px;
  padding: 0 24px;
`;

const FoodRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
`;
