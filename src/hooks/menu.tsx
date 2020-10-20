import React, { createContext, useContext, useState } from 'react';

interface IContextData {
  handleShowMenu(): void;
  showMenu: boolean;
}

const MenuContext = createContext<IContextData>({} as IContextData);

export const MenuProvider: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function handleShowMenu(): void {
    setShowMenu(!showMenu);
  }

  return (
    <MenuContext.Provider value={{ handleShowMenu, showMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu(): IContextData {
  const context = useContext(MenuContext);

  return context;
}
