type CategoryProps = {
    name: string;
    image: string;
};

const CategoryCard = ({name, image}: CategoryProps) => {
    return(
        <button className="w-[108px] h-[74px] bg-[#FAFAFB] rounded-[8px] flex flex-col items-center justify-center gap-[4px]">
            <img src={image} alt={name} className="w-[28px] h-[28px]"/>
            <span className="text-sm">{name}</span>
        </button>
    )
}

export default CategoryCard;