import { createContext } from "react";

export const CounterValueContext = createContext<number>(0);
export const CounterActionContext = createContext<() => void>(() => {});
