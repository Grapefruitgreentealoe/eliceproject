import Routes from "./Routes";
import React from "react";
import styled from 'styled-components'

function App() {
  const MainWrapper = styled.div`
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
  `
  return (
    <MainWrapper>
      <Routes></Routes>
    </MainWrapper>
  );

}

export default App;
