import React from 'react'
import styled from 'styled-components'
import style from './style'

type ContainerProps = {}
type ComponentProps = { className: string } & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="title">
      <h1>ハジメマシテ!!</h1>
    </div>
    <div className="main">
      <h3>About me</h3>
      <p>
        ネポタと申します。 性別は女です。
        <br />
        <a
          href="https://twitter.com/soichiro_nitta"
          rel="noopener noreferrer"
          target="_blank"
        >
          旦那さん
        </a>
        と猫のプータローと一緒に毎日楽しく過ごしています。
        <br />
        よくツイッターにおりますので、気軽にリプください。
        <br />
        <br />
        <h3>SNS</h3>
        <ul>
          <li>
            {' '}
            <a
              href="https://twitter.com/_nenenemo"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://www.instagram.com/_nenenemu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>{' '}
          <li>
            {' '}
            <a
              href="https://note.com/nepotaya"
              rel="noopener noreferrer"
              target="_blank"
            >
              note
            </a>
          </li>{' '}
          <li>
            {' '}
            <a
              href="https://github.com/aya-nitta"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <br />
        ご連絡は
        <a
          href="https://twitter.com/_nenenemo"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>{' '}
        かnepota99@gmail.comまでお願いします。
      </p>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${style}
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="nepota" {...props} />
}

export default Container
