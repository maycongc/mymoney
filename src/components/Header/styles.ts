import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: linear-gradient(
    to bottom right,
    ${p => p.theme.gradient1},
    ${p => p.theme.gradient2}
  );
`;

export const Content = styled.div`
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3.2rem 1.6rem 16rem;
  margin: 0 auto;

  button {
    height: 4.8rem;
    font-weight: 600;

    color: #33cc95;
    background: #fff;
    border: 1px solid #33cc95;

    border-radius: 0.5rem;
    padding: 1.2rem 3.2rem;
    transition: all 0.25s ease;

    box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);

    &:hover {
      color: #fff;
      background: #33cc95;
    }
  }

  img {
    height: 4rem;
  }
`;
