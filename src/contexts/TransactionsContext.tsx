import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type TransactionProps = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>;

export type TransactionsContextProps = {
  transactions: TransactionProps[];
  onCreateTransaction: (transaction: TransactionInputProps) => Promise<void>;
};

type TransactionsContextProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext(
  {} as TransactionsContextProps,
);

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps): JSX.Element {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(res => setTransactions(res.data.transactions));
  }, []);

  async function onCreateTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, onCreateTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
