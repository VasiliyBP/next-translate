// import appWithI18n from 'next-translate/appWithI18n';
// import { NextComponentType } from 'next';
import type { AppProps } from 'next/app';
// import i18nConfig from '../i18n';


import { wrapper } from '../modules/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Component {...pageProps} />
  );
}

// MyApp.getInitialProps = async ({ Component, ctx }: any) => {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps };
// };

// export default wrapper.withRedux(
//   appWithI18n(MyApp as NextComponentType<{}, {}>, {
//     ...i18nConfig,
//     // Set to false if you want to load all the namespaces on _app.js getInitialProps
//     skipInitialProps: true,
//   }),
// );

// export const getStaticProps = undefined;

// export default appWithI18n(
// wrapper.withRedux(
// MyApp,
// ),
// {
// ...i18nConfig,
// Set to false if you want to load all the namespaces on _app.js getInitialProps
// skipInitialProps: true,
// }
// )



export default wrapper.withRedux(MyApp);

