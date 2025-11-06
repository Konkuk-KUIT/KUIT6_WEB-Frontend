import { useState } from "react";

export function useToggle(initialValue) {
  const [booleanState, setBooleanState] = useState(initialValue);

  const toggleBooleanState = () => {
    setBooleanState((boolean) => !boolean);
  };

  return [booleanState, toggleBooleanState];
}
