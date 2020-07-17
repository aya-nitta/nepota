import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import style from './style'
import { animations } from '@soichiro_nitta/animations'

type ContainerProps = {}
type ComponentProps = {
  className: string
  refs: { finger: React.MutableRefObject<HTMLImageElement | null> }
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="wrapper">
      <a href="/nepota">
        <img src="/finger.svg" ref={props.refs.finger} />
        <span>Nepota</span>
      </a>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${style}
`

const Container: React.FC<ContainerProps> = props => {
  const refs = {
    finger: useRef<HTMLImageElement>(null)
  }

  useEffect(() => {
    if (refs.finger.current) {
      setInterval(animations.x(refs.finger.current, '3rem', 0.5, 'InOut'))
    }
  }, [refs.finger])

  return <StyledComponent className="index" {...{ refs, ...props }} />
}

export default Container
