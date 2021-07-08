import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';

import { ThemeContextProvider } from './contexts/ThemeContext';
import { TransactionsContextProvider } from './contexts/TransactionsContext';

import { GlobalStyles } from './styles/global';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <TransactionsContextProvider>
          <GlobalStyles />
          <Routes />
        </TransactionsContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}
