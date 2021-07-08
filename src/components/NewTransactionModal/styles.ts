import styled from 'styled-components';
import { transparentize } from 'polished';

export const ModalFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h2 {
    color: ${p => p.theme.titles};
    font-size: 2.4rem;

    margin-bottom: 1.6rem;
  }

  input {
    width: 100%;
    height: 6.4rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.6rem;
    padding: 0 2.4rem;
    outline: none;

    &::placeholder {
      color: ${p => p.theme.text};
      font-size: 1.6rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 6.4rem;
    background: ${p => p.theme.color2};
    color: #fff;
    border: 0;
    border-radius: 0.6rem;
    font-weight: 600;
    font-size: 1.7rem;
    transition: all 0.3s ease;

    padding: 0 19.8rem;
    margin-top: 2.4rem;

    &:hover {
      background: #fff;
      color: ${p => p.theme.color2};
      border: 1px solid ${p => p.theme.color2};
    }
  }
`;

export const TypeWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

type TypeWrapperProps = {
  isActive: boolean;
  activeColor: 'color2' | 'color3';
};

export const ButtonWrapper = styled.button<TypeWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6.4rem;

  background: ${p =>
    p.isActive ? transparentize(0.8, p.theme[p.activeColor]) : 'none'};

  border: 1px solid rgba(150, 156, 178, 0.2);
  border-radius: 0.6rem;
  gap: 1.6rem;

  transition: all 0.3s ease;

  img {
    width: 2.6rem;
    height: 2.6rem;
  }

  span {
    font-weight: 400;
    font-size: 1.6rem;
  }

  &:hover {
    border: 1px solid ${p => p.theme[p.activeColor]};
  }
`;
