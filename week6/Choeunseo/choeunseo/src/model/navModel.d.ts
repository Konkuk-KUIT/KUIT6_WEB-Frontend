// src/model/navModel.js.d.ts
export type NavItem = {
    name: string;
    iconSrc: string;
    href?: string; // (선택) 나중에 링크 넣고 싶으면 사용
  };
  
  export const navModel: NavItem[];
  