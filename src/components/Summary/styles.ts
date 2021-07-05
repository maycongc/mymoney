import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin-top: -11.3rem;

  div {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 0.5rem;
    padding: 2.4rem 3.2rem;
    gap: 1.5rem;
    color: ${p => p.theme.titles};

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      font-size: 1.6rem;
    }

    strong {
      font-size: 3.6rem;
      font-weight: 500;
    }

    &.total {
      background: ${p => p.theme.color2};
      color: #fff;
    }
  }
`;
