import styled from 'styled-components';

export const TransactionTableWrapper = styled.div`
  max-width: 1120px;
  margin-top: 6.4rem;

  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    th {
      color: ${p => p.theme.text};
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      text-align: left;
      line-height: 2.4rem;
    }

    td {
      background-color: #fff;
      padding: 1.6rem 3.2rem;
      border: 0;
      border-radius: 0.5rem;
      color: ${p => p.theme.text};

      &:first-child {
        color: ${p => p.theme.titles};
      }

      &.deposit {
        color: ${p => p.theme.color2};
      }

      &.withdraw {
        color: ${p => p.theme.color3};
      }
    }
  }
`;
