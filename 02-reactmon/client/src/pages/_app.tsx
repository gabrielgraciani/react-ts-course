import { AppProps } from 'next/app';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />

      <GlobalStyles />
    </>
  );
}

export default MyApp;
