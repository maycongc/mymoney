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
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
