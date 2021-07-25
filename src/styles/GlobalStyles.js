import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  :root {
    --pink: #ff66cc;
    --offwhite: #f0f0f0;
  }
  html {
    font-size: 10px;
    background: var(--offwhite);
  }

  body {
    font-size: 2rem;
    text-align: center;
    height: 100%;
    width: 82%;
    
    top: 0;
    right: 0;
  }
  .image {
    border: 2px solid white;
  }

  button {
    box-shadow:inset 0px 1px 0px 0px #fbafe3;
	  background:linear-gradient(to bottom, #ff66cc 5%, #ef027d 100%);
	  background-color:#ff66cc;
	  border-radius:8px;
	  border:2px solid #ee1eb5;
	  display:inline-block;
	  cursor:pointer;
	  color:#ffffff;
	  font-family:Verdana;
	  font-size:13px;
	  font-weight:bold;
	  padding:6px 13px;
	  text-decoration:none;
	  text-shadow:0px 1px 0px #c70067;
    
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

 
  h1 {
    font-family: alisha, sans-serif;
  }
  h2 {
    font-family: alisha, sans-serif;
    font-weight: 400;
    font-size: 34px;
  }
  
  .articleTitle {
    font-family: ltc-bodoni-175, serif;
    font-size: 24px;
  }
  .articlePublication {
    font-family: adobe-garamond-pro, serif;
    font-weight: 700;
    font-size: 16px;
  }
  .articleText {
    font-family: adobe-garamond-pro, serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
  .smallTag {
    display: flex;
    padding: 10px;
    font-family: adobe-garamond-pro, serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--pink);
    text-transform: uppercase;
  }
  .signature {
    color: white;
    font-family: adobe-garamond-pro, serif;
    font-size: 11px;
  }
  .aboutTitle {
    font-family: alisha, sans-serif;
    font-size: 4.5rem;
  }
  .line {
    width: 70%;
   height: 1px;
   border: 0 none;
   margin-right: auto;
   margin-left: auto;
   margin-top: 60px;
   margin-bottom:40px;
   background-color:#555;
  }
  .featuredStoriesTitle {
    font-size: 4.5rem;
    @media(max-width: 768px) {
      background-color: yellow;
      margin-top: 125px;
      font-size: 3.5rem;
    }
  }
`;

export default GlobalStyles;