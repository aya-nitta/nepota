import * as React from 'react'
import { AppProps } from 'next/app'
import Layout from '~/layouts/default'
// import { GlobalStyle, styles } from '~/utils/styles'
// import { Provider } from 'react-redux'
// import store from '~/store'

const _App: React.FC<AppProps> = props => (
  // <Provider store={store}>
  // <GlobalStyle />
  <Layout {...props} />
  // </Provider>
)

export default _App
