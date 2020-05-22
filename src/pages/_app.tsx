import * as React from 'react'
import { AppProps } from 'next/app'
import Layout from '~/layouts/default'
import { GlobalStyle } from '~/utils/styles'
// import { Provider } from 'react-redux'
// import store from '~/store'

const _App: React.FC<AppProps> = props => (
  <>
    <GlobalStyle />
    <Layout {...props} />
  </>
)

export default _App
