import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --pink: #ff66cc;
    --offwhite: #f0f0f0;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    background: var(--offwhite);
  }

  button {
    background: var(--pink);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }



`;

export default GlobalStyles;