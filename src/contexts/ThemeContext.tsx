import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../styles/themes/light';

export type ThemeContextProps = {
  theme: typeof lightTheme;
};

export const ThemeContext = createContext({} as ThemeContextProps);

type ContextProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ContextProps): JSX.Element {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
