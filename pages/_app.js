import '../src/styles/reset.css';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import Head from 'next/head'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce Product Page</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
