import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Main />
    </>
  );
};

export default App;