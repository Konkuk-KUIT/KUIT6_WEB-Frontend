import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import { CounterValueContext, CounterActionContext } from "./CounterContext";

interface CounterProviderProps {
  children: ReactNode;
}

function CounterProvider({ children }: CounterProviderProps) {
  const [counter, setCounter] = useState(0);

  const increase = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  console.log("Provider rendered");

  return (
    <CounterValueContext.Provider value={counter}>
      <CounterActionContext.Provider value={increase}>
        {children}
      </CounterActionContext.Provider>
    </CounterValueContext.Provider>
  );
}
export default CounterProvider;
