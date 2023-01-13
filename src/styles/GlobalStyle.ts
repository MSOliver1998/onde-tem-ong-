import { createGlobalStyle, keyframes } from "styled-components";

const rotate = keyframes`
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(350deg)
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
  /*Primary Palette*/

  --Color-primary: #6F2A86;
  --Color-primary-50: #AD72C0;
  --Color-secondary: rgb(111,42,134,0.8);
  --Color-terciary: #f1ebf3;

  

  /*Grey Scale Palette*/

  --Grey100: #1E1E1E;
  --Grey50: #2E2F35;
  --Grey20: #423F44;
  --Grey10: #C2C2C2;
  --Grey0: #D9D9D9;

  --Withe: #ffff;
  --Blue:  #3b5998;
  --Black: #000;
  --Black50: #808080;

  --placeholderInputRegister: rgba(255, 255, 255, 0.6);

  /*Feedback Palette*/

  --Negative: #e60000;
  --Warning: #ffcd07;
  --Sucess: #168821;
  --Information: #155bcb;


  --font12: 0.7rem;
  --font14: 0.875;
  --font16: 1rem;
  --font20: 1.25rem;
  --font24: 2.5rem;
  --fon32:2rem;
  --font40: 2.5rem; 

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  .container{
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  } 

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .loading{
    animation: ${rotate} 0.5s linear infinite;
  }
`;
