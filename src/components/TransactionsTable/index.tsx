import { TransactionTableWrapper } from './styles';

export function TransactionsTable(): JSX.Element {
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
          <tr>
            <td>Desenvolvimento do site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento do site</td>
            <td className="withdraw">R$ -1.500,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionTableWrapper>
  );
}
