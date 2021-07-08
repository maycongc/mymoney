import Modal from 'react-modal';

import { FormEvent, useState } from 'react';
import closeIcon from '../../assets/images/fechar.svg';
import incomeIcon from '../../assets/images/entradas.svg';
import outcomeIcon from '../../assets/images/saidas.svg';

import * as S from './styles';
import { useTransactions } from '../../hooks/useTransactions';

Modal.setAppElement('#root');

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal(
  props: NewTransactionModalProps,
): JSX.Element {
  const { isOpen, onRequestClose } = props;

  const { onCreateTransaction } = useTransactions();

  const [type, setType] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (type && title && amount && category) {
      const newTransaction = {
        title,
        amount,
        type,
        category,
      };

      await onCreateTransaction(newTransaction);

      onRequestClose();

      setType(null);
      setTitle(null);
      setAmount(null);
      setCategory(null);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar modal" />
      </button>

      <S.ModalFormWrapper onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title || ''}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount || ''}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <S.TypeWrapper>
          <S.ButtonWrapper
            type="button"
            isActive={type === 'deposit'}
            activeColor="color2"
            onClick={() => setType('deposit')}
          >
            <img src={incomeIcon} alt="" />
            <span>Entrada</span>
          </S.ButtonWrapper>

          <S.ButtonWrapper
            type="button"
            isActive={type === 'withdraw'}
            activeColor="color3"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeIcon} alt="" />
            <span>Saída</span>
          </S.ButtonWrapper>
        </S.TypeWrapper>

        <input
          type="text"
          placeholder="Categoria"
          value={category || ''}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.ModalFormWrapper>
    </Modal>
  );
}
