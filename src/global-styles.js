import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
 html {
  box-sizing: border-box;
  font-size: 100%;
  }

  *,::after,::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    background: #fafafa;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #1a2a2a;
    max-width: 100vw;
    max-height: 100vh;
  }
  
  div {
      padding:0;
      margin:0;
  }
  a {
    background-color: transparent;
    line-height: inherit;
    color: #ae561f;
    cursor: pointer;
    text-decoration: none;
  } 

  a img {
    border: 0;
  }

  img {
    border-style: none;
    vertical-align: middle;
    max-width: 100%;
  }

`;
