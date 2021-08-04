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
    width: 100%;
    margin: 0;
    
  }
  .image {
    border: 2px solid white;
  }

  button {
    display: flex;
    border: 2px solid white;
	  background-color:white;
	  display:inline-block;
	  cursor:pointer;
	  color:var(--pink);
	  font-family: futura-pt, sans-serif;
    text-transform: uppercase;
	  padding:6px 13px;
	  text-decoration:none;
	  :hover {
      background-color: var(--pink);
      color: white;
    }
    
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
  .contactEmail {
    font-family: futura-pt, sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    display:inline-block;
    cursor:pointer;
  }
  .aboutTitle {
    font-family: alisha, sans-serif;
    font-size: 4.5rem;
    @media(max-width: 768px) {
      margin-left: 20px;
      margin-top: 150px;
      font-size: 2.5rem;
      
    }
  }
  .aboutText {
    font-family: adobe-garamond-pro, serif;
    font-weight: 400;
    font-size: 2rem;
  }
  .line {
    width: 100%;
   height: 1px;
   border: 0 none;
   margin-right: auto;
   margin-left: auto;
   margin-top: 40px;
   margin-bottom:40px;
   background-color:var(--pink);
   @media(max-width: 768px) {
     display: none;
   }
  }
  .featuredStoriesTitle {
    font-size: 4.5rem;
    margin-left: 240px;
   
    @media(max-width: 768px) {
      margin-left: 20px;
      margin-top: 150px;
      font-size: 2.5rem;
    }
  }

`;



export default GlobalStyles;