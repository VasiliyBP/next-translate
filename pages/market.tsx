import React, { } from 'react';
// import loadNamespaces from 'next-translate/loadNamespaces';
import useTranslation from 'next-translate/useTranslation';

import Head from 'next/head';
import { connect } from 'react-redux';
import {
  AppState,
  wrapper,
} from '../modules/store';
import Link from 'next/link';

const Market = (props: any) => {
  const siteTitle = 'market T';
  const siteDescription = 'market D';

  const {
    data, hydrated,
  } = props;

  // console.log('market', props);
  // console.log('hydrated', hydrated);
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
      </Head>



      <div className="flex flex-col max-w-screen-2xl mx-auto min-h-screen sm:min-h-full mt-[120px]">
        <div className="mx-10 py-10 flex flex-col justify-center items-start text-2xl ">
          <h1>Market — getInitialProps</h1>

          <br />
          <p>
            <Link href="/">
              Go to Home
            </Link>
          </p>

          <p>
            Translation test value: {t('global.cancel')}
          </p>
        </div>
      </div>
    </>

  );
};

// Market.getInitialProps = wrapper.getInitialPageProps((store) => async (ctx) => {
Market.getInitialProps = (ctx: any) => {
  // console.log('store', store);
  // console.log('ctx', ctx);

  const isSSR = typeof window === 'undefined';

  console.log('MARKET getInitialPageProps', ctx);
  console.log('isSSR', isSSR);

  // if (isSSR) {
  //   await get data
  //   console.log('state', store.getState());
  // } else {
  //   get data
  // }

  return {
    // Will be passed to the page component as props
    // ...(await loadNamespaces({
    //   locale: ctx.locale,
    //   pathname: '/market',
    // })),
  };
}
// });

const mapStateToProps = (state: AppState) => {
  const {
    app: { hydrated },
  } = state;

  return {
    hydrated,
  };
};



export default connect(mapStateToProps)(Market);
