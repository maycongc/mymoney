import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${p => p.theme.background};
    -webkit-font-smoothing: antialiased;

    font-size: 1.6rem;

    @media (max-width: 1080px) {
      font-size: 1.5rem;
    }

    @media (max-with: 720px) {
      font-size: 1.4rem;
    }
  }

  html, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
    }
  }

  input:focus {
    transition: all 0.25s linear;
    transform: scale(1.03);
    border: 1px solid ${p => p.theme.color2};
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.6);

    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background: ${p => p.theme.background};
    position: relative;

    width: 100%;
    max-width: 576px;

    border-radius: 0.6rem;
    padding: 6.4rem 4.8rem;
  }

  .react-modal-close {
    position: absolute;
    width: 4rem;
    height: 4rem;
    right: 2.4rem;
    top: 2.4rem;
    border: 0;
    background: none;
    border-radius: 2rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
  }

`;
