import { useTransactions } from '../../hooks/useTransactions';

import entradaIcon from '../../assets/images/entradas.svg';
import saidaIcon from '../../assets/images/saidas.svg';
import totalIcon from '../../assets/images/total.svg';

import { SummaryWrapper } from './styles';

export function Summary(): JSX.Element {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw -= transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    },
  );

  const handleCurrency = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'brl',
  });

  return (
    <SummaryWrapper>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaIcon} alt="Entradas ícone" />
        </header>
        <strong>{handleCurrency.format(summary.deposit)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaIcon} alt="Saída ícone" />
        </header>
        <strong>{handleCurrency.format(summary.withdraw)}</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total ícone" />
        </header>
        <strong>{handleCurrency.format(summary.total)}</strong>
      </div>
    </SummaryWrapper>
  );
}
