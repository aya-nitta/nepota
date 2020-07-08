import React from 'react'
import { AppProps } from 'next/app'
import styled from 'styled-components'

type ContainerProps = AppProps
type ComponentProps = {
  className: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <>
    <div className={props.className}>
      <div id="page">
        <props.Component {...props.pageProps} />
      </div>
    </div>
  </>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 100%;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="default" {...props} />
}

export default Container
