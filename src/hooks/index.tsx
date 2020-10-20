import React from 'react';

import { FocusProvider } from './focus';
import { MenuProvider } from './menu';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FocusProvider>
      <MenuProvider>{children}</MenuProvider>
    </FocusProvider>
  );
};

export default AppProvider;
