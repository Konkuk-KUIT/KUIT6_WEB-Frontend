import Router from "./pages/Router"
import styled from "styled-components"

const App = () => {
  return (
    <StyledGlobal>
      <Router />
    </StyledGlobal>
  );
};

const StyledGlobal = styled.div`
  font-family: "Pretendard";
`;

export default App;
