import logoImg from '../../assets/images/logo.svg';

import * as S from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header({
  onOpenNewTransactionModal,
}: HeaderProps): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.Content>
        <img src={logoImg} alt="my money" />

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </S.Content>
    </S.HeaderWrapper>
  );
}
