import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../styles/themes/light';

export type ThemeContextProps = {
  theme: typeof lightTheme;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeContextProvider({
  children,
}: ThemeContextProviderProps): JSX.Element {
  const [theme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
