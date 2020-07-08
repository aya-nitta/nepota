import React from 'react'
import styled from 'styled-components'
import style from './style'

type ContainerProps = {}
type ComponentProps = { className: string } & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="header">
      <div className="title">ハジメマシテ!!</div>
    </div>
    <div className="main">
      <p>
        ネポタと申します。 性別は女です。
        <br />
        <a href="https://twitter.com/soichiro_nitta" target="_blank">
          旦那さん
        </a>
        と猫のプータローと一緒に毎日楽しく過ごしています。
        <br />
        よくツイッターにおりますので、気軽にリプください。
        <br />
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
