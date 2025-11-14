import { Link } from "react-router-dom";
import { foodCategories } from "../../models/foodCategories";

export default function FoodSection() {
  return (
    <section className="px-6 pt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">오늘은 무엇을 먹을까요?</h2>
      <p className="text-sm">한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</p>

      <div className="grid grid-cols-3 gap-[9px] justify-items-center mt-8">
        {foodCategories.map((item, index) => (
          <Link key={index} to="/stores" className="flex flex-col items-center justify-center w-[108px] h-[74px] rounded-lg bg-[#FAFAFB] ">
            <img src={item.icon} alt={item.label} className="w-7 h-7 mb-2" />
            <p className="text-sm text-gray-800">{item.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
