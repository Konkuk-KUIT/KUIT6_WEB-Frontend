import { useContext } from "react";
import { CounterActionContext } from "./context/CounterContext";

const MyButton = () => {
  console.log("MyButton rendered");
  const increase = useContext(CounterActionContext);
  return <button onClick={increase}>Increase</button>;
};

export default MyButton;
