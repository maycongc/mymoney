import logoImg from '../../assets/images/logo.svg';

import * as S from './styles';

export function Header(): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.Content>
        <img src={logoImg} alt="my money" />

        <button type="button">Nova transação</button>
      </S.Content>
    </S.HeaderWrapper>
  );
}
