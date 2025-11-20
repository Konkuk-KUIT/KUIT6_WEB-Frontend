import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MyComponent2 = ({ children }: Props) => {
  console.log("MyComponent2 rendered");
  return <div>MyComponent2 {children}</div>;
};

export default MyComponent2;
