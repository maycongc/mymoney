import { SummaryWrapper } from './styles';
import entradaIcon from '../../assets/images/entradas.svg';
import saidaIcon from '../../assets/images/saidas.svg';
import totalIcon from '../../assets/images/total.svg';

export function Summary(): JSX.Element {
  return (
    <SummaryWrapper>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaIcon} alt="Entradas ícone" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaIcon} alt="Saída ícone" />
        </header>
        <strong>R$ 1.259,00</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total ícone" />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </SummaryWrapper>
  );
}
