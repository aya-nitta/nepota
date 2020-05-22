import React from 'react'
import styled from 'styled-components'
import style from './style'

type ContainerProps = {}
type ComponentProps = {
  className: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>top page</div>
)

const StyledComponent = styled(Component)`
  ${style}
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="index" {...props} />
}

export default Container
