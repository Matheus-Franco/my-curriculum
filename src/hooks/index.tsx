import React from 'react';

import { FocusProvider } from './focus';

const AppProvider: React.FC = ({ children }) => {
  return <FocusProvider>{children}</FocusProvider>;
};

export default AppProvider;
