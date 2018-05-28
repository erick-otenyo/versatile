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
    overflow: hidden;
  }
  
  div {
      padding:0;
      margin:0;
  }   
`;
