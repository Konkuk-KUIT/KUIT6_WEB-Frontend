import { useNavigate } from "react-router-dom";

type CategoryProps = {
    name: string;
    image: string;
};

const CategoryCard = ({name, image}: CategoryProps) => {
    const navigate = useNavigate();

    return(
        <button className="w-[108px] h-[74px] bg-[#FAFAFB] rounded-[8px] flex flex-col items-center justify-center gap-[4px]" onClick={()=>navigate('/store')}>
            <img src={image} alt={name} className="w-[28px] h-[28px]"/>
            <span className="text-sm">{name}</span>
        </button>
    )
}

export default CategoryCard;