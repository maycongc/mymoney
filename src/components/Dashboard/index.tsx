import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

import { DashboardWrapper } from './styles';

export function Dashboard(): JSX.Element {
  return (
    <DashboardWrapper>
      <Summary />
      <TransactionsTable />
    </DashboardWrapper>
  );
}
