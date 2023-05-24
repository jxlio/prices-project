import { createContext, useState } from "react";

export const DarkMode = createContext();

export const DarkModeFunction = ({children}) => {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () => {
    setDark(!dark);
    }
  return (
    <DarkMode.Provider value={[dark, setDark, toggleDarkMode]}>
      {children}
    </DarkMode.Provider>
  );
};
