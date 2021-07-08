import { useContext } from 'react';
import {
  TransactionsContext,
  TransactionsContextProps,
} from '../contexts/TransactionsContext';

export function useTransactions(): TransactionsContextProps {
  const value = useContext(TransactionsContext);

  return value;
}
