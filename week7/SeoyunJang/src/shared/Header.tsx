import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  style?: string;
  link?: string;
}

function Header({ title, subtitle, showBack = false, style = "", link = "" }: HeaderProps) {
  return (
    <header className={`flex flex-col ${style}`}>
        {/* 상단: 뒤로가기 버튼 */}
        {showBack && (
          <Link to={link}>
            <button className="h-[24px] w-[24px] mt-[30px] mx-[10px]">
              <img src="/arrow.svg" alt="뒤로가기" />
            </button>
          </Link>
        )}

        {/* 타이틀 + 서브타이틀 묶음 */}
        <div className="flex flex-col gap-[13px] mt-[30px]">
          <h1 className="px-[24px] text-[26px] text-[#191F28] font-bold">{title}</h1>
          {subtitle && (
            <h3 className="text-[17px] text-[#333D4B] px-[24px]">{subtitle}</h3>
          )}
        </div>
    </header>
  );
}

export default Header;
