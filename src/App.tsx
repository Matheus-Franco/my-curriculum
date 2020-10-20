import React from 'react';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <AppProvider>
        <Main />
      </AppProvider>
    </>
  );
};

export default App;
