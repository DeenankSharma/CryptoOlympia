import { createContext, useContext, useState, ReactNode } from 'react';

interface NavBarContextType {
  navNum: number;
  setNavNum: (num: number) => void;
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export function useNav(): NavBarContextType {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNav must be used within NavProvider");
  }
  return context;
}

interface NavProviderProps {
  children: ReactNode;
}

export function NavProvider({ children }: NavProviderProps) {
  const [navNum, setNavNum] = useState<number>(1);

  const value: NavBarContextType = {
    navNum,
    setNavNum
  };

  return (
    <NavBarContext.Provider value={value}>
      {children}
    </NavBarContext.Provider>
  );
}