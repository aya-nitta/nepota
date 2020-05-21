import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>Component</div>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
