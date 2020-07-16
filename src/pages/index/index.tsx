import React from 'react'
import styled from 'styled-components'
import style from './style'
// import gsap from 'react-gsap-enhancer'

type ContainerProps = {}
type ComponentProps = { className: string } & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="wrapper">
      <div className="inner">
        <div className="nepota">
          <a href="/nepota">
            {' '}
            <img src="/finger.svg" width="80" height="80" />
            Nepota
          </a>
        </div>
        {/* <div className="click">click here</div> */}
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" />
      </div>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${style}
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="index" {...props} />
}

export default Container
