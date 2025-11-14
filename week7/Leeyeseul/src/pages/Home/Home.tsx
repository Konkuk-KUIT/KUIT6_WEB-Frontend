import styled from "styled-components";
import OrderBar from "../../components/Orderbar/OrderBar";
import CategoryButton from "../../pages/Home/CategoryBtn";
import { Link } from "react-router-dom"; 

const categories = [
  { id: "pizza", label: "피자", imageSrc: "/pizza.svg" },
  { id: "salad", label: "샐러드", imageSrc: "/salad.svg" },
  { id: "burger", label: "햄버거", imageSrc: "/burger.svg" },
  { id: "korean", label: "한식", imageSrc: "/korean.svg" },
  { id: "snack", label: "분식", imageSrc: "/snack.svg" },
  { id: "chicken", label: "치킨", imageSrc: "/chicken.svg" },
  { id: "sushi", label: "초밥", imageSrc: "/sushi.svg" },
  { id: "sandwich", label: "샌드위치", imageSrc: "/sandwich.svg" },
  { id: "pasta", label: "파스타", imageSrc: "/pasta.svg" },
  { id: "dessert", label: "디저트", imageSrc: "/dessert.svg" },
  { id: "coffee", label: "커피", imageSrc: "/coffee.svg" },
  { id: "more", label: "더보기", isMore: true },
];

const Home = () => {
  return (
    <>
      <Page>
        <TitleWrap>
          <h1>오늘은 무엇을 먹을까요?</h1>
          <p>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</p>
        </TitleWrap>

        <Grid>
          {categories.map((c) =>
            c.id === "salad" ? (
              <CategoryLink to="/store" key={c.id}>
                <CategoryButton
                  label={c.label}
                  imageSrc={c.imageSrc}
                  isMore={c.isMore}
                />
              </CategoryLink>
            ) : (
              <CategoryButton
                key={c.id}
                label={c.label}
                imageSrc={c.imageSrc}
                isMore={c.isMore}
              />
            )
          )}
        </Grid>
      </Page>

      <OrderBar totalPrice={12100} />
    </>
  );
};

export default Home;

const Page = styled.div`
  min-height: 100vh;
  padding: 24px 20px 140px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const TitleWrap = styled.div`
  margin-bottom: 16px;

  h1 {
    margin: 0 0 6px;
    font-size: 22px;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #868e96;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
