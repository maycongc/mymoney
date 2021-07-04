import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/global';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />
        <Routes />
      </ThemeContextProvider>
    </BrowserRouter>
  );
}
