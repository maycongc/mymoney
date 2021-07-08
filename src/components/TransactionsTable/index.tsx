import { useTransactions } from '../../hooks/useTransactions';
import { TransactionTableWrapper } from './styles';

export function TransactionsTable(): JSX.Element {
  const { transactions } = useTransactions();

  const handleCurrency = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'brl',
  });

  const handleDate = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  return (
    <TransactionTableWrapper>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {handleCurrency.format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{handleDate.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionTableWrapper>
  );
}
