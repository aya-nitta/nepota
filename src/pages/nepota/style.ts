import { css } from 'styled-components'

export default css`
  line-height: 2;

  > .title {
    letter-spacing: 3px;
    display: flex;
    justify-content: center;
    position: absolute;
    margin: 5rem auto;
    width: 100%;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    font-family: 'Mkpop';
  }
  > h1 {
    position: relative;
    width: 100%;
    height: 20rem;
  }
  > .main {
    margin: auto 0;
    padding: 30rem 30rem;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5rem;
  }
  a {
    color: #888;
  }
`
