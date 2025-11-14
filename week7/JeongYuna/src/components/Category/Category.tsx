import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategoryButton = styled.button`
    width: 108px;
    height: 74px;
    background-color: #FAFAFB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CategoryImg = styled.img`
    width: 28px;
    height: 28px;
`

const CategoryName = styled.span`
    font: Pretendard;
    font-size: 14px;
    color: #333D4B;
`

const CategoryArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 9px;
    position: relative;
    margin: 5rem 0;
`

interface CategoryProp {
    name: string,
    imgPath: string,
    path: string
}

const Category = ({ category }: {category: CategoryProp} ) => {
    const navigate = useNavigate();
    
    return (
        <CategoryButton onClick={() => navigate("/" + category.path)}>
            <CategoryImg src={category.imgPath}></CategoryImg>
            <CategoryName>{category.name}</CategoryName>
        </CategoryButton>
    )
}

const Categories = ( {categories}: {categories: CategoryProp[]} ) => {
    return (
            <CategoryArea>
                {categories.map(
                    (category) => <Category key={category.name} category={category}></Category>
                )}
            </CategoryArea>
    )
}
export default Category;

export { Categories };

export type { CategoryProp };