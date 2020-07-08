import { css } from 'styled-components'

export default css`
  > .header {
    position: relative;
    width: 100%;
    height: 20rem;
    /* background: #1c2c52; */
    > .title {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: -5rem;
      width: 100%;
      text-align: center;
      font-size: 5rem;
      font-weight: bold;
      font-family: 'Mkpop';
    }
  }
  > .main {
    margin: auto 0;
    padding: 30rem;
    font-size: 2rem;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5rem;
  }
  a {
    color: #ffd632;
  }
`
