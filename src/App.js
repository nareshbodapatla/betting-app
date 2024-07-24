import React from 'react';
import styled from 'styled-components';
import DepositPage from './components/Depositpage';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #1c1c1c;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <DepositPage />
    </AppContainer>
  );
}

export default App;