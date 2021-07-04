import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from '../contexts/ThemeContext';

export function useTheme(): ThemeContextProps {
  const value = useContext(ThemeContext);

  return value;
}
