// import appWithI18n from 'next-translate/appWithI18n';
// import { NextComponentType } from 'next';
import type { AppProps } from 'next/app';



import { wrapper } from '../modules/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Component {...pageProps} />
  );
}

// export default wrapper.withRedux(
//   appWithI18n(MyApp as NextComponentType<{}, {}>, {
//     ...i18nConfig,
//     // Set to false if you want to load all the namespaces on _app.js getInitialProps
//     skipInitialProps: true,
//   }),
// );

// export const getStaticProps = undefined;

export default wrapper.withRedux(
  // appWithTranslation(
  MyApp,
  // ),
);
