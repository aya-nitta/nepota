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
    > .inner {
      > .nepota {
        font-family: 'Mkpop';
        > a {
          color: black;
          > img:nth-child(1) {
            padding-right: 2rem;
            -webkit-animation: right 0.8s infinite ease-in-out;
            animation: right 0.8s infinite ease-in-out;
          }
        }
      }
      /* > .click {
        font-size: 3rem;
        text-align: center;
        color: #dcdcdc;
      } */
    }
  }

  @keyframes right {
    0% {
      transform: translate(-15px);
    }
    50% {
      transform: translate(15px);
    }
    100% {
      transform: translate(-15px);
    }
  }
`
