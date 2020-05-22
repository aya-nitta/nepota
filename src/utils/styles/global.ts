import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  :after,
  :before {
    -webkit-text-size-adjust: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }
  html {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 0.725vw;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: white;
    background: white;
    line-height: 1;
    letter-spacing: 0;
    font-family: Noto Sans JP, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 0;
  }
  #__next {
    width: 100%;
    height: 100%;
  }
  h1,
  h2,
  h3,
  p,
  dl,
  dd {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    border: 0px;
    vertical-align: middle;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  input,
  button,
  select,
  textarea {
    font-family: inherit;
  }
  input[type='text'],
  input[type='email'],
  input[type='password'],
  textarea,
  select {
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    background: transparent;
  }
  button {
    padding: 0;
    border: none;
    background: none;
  }
`
