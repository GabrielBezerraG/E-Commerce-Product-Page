import '../src/styles/reset.css';
import { GlobalStyles } from '../src/styles/GlobalStyles';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
