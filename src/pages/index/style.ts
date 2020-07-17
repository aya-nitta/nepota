import { css } from 'styled-components'

export default css`
  > .wrapper {
    position: absolute;
    /* 左上を起点にする */
    top: 0;
    left: 0;
    /* 左右中央に配置する */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 10rem;
    font-weight: bold;
    > a {
      display: block;
      position: relative;
      font-family: 'Mkpop';
      color: black;
      > img {
        position: absolute;
        top: 1rem;
        left: -15rem;
        width: 10rem;
        height: 10rem;
      }
    }
  }
`
