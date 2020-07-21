import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import style from './style'
import { animations } from '@soichiro_nitta/animations'
import { functions } from '~/utils/functions'
import { useEffectAsync } from '~/hooks/useEffectAsync'

type ContainerProps = {}
type ComponentProps = {
  className: string
  refs: {
    finger: React.MutableRefObject<HTMLImageElement | null>
    title: React.MutableRefObject<HTMLSpanElement | null>
  }
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="wrapper">
      <a href="/nepota">
        <img src="/finger.svg" ref={props.refs.finger} />
        <span ref={props.refs.title}>Nepota</span>
      </a>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${style}
`

const Container: React.FC<ContainerProps> = props => {
  const refs = {
    finger: useRef<HTMLImageElement>(null),
    title: useRef<HTMLSpanElement>(null)
  }

  useEffect(() => {
    setInterval(async () => {
      if (refs.finger.current) {
        animations.x(refs.finger.current, '5rem', 0.5, 'In')
        animations.scale(refs.finger.current, 1.2, 0.5, 'In')

        await functions.delay(0.5)

        if (refs.finger.current) {
          animations.x(refs.finger.current, '0rem', 1, 'Out')
          animations.scale(refs.finger.current, 1, 1, 'Out')
        }
      }
    }, 1500)
  }, [refs.finger])

  useEffectAsync({
    effect: async () => {
      await functions.delay(1)
      console.log('test')
    },
    deps: []
  })

  return <StyledComponent className="index" {...{ refs, ...props }} />
}

export default Container
