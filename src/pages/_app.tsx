import * as React from 'react'
import { AppProps } from 'next/app'
import Layout from '~/layouts/default'
import { GlobalStyle } from '~/utils/styles'
import Head from 'next/head'
// import { Provider } from 'react-redux'
// import store from '~/store'

const _App: React.FC<AppProps> = props => (
  <>
    <Head>
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      /> */}
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Layout {...props} />
  </>
)

export default _App
