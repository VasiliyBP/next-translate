import React, { memo, } from 'react';

import Head from 'next/head';
// import { GetServerSideProps } from 'next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import useTranslation from 'next-translate/useTranslation';

import { connect } from 'react-redux';
// import loadNamespaces from 'next-translate/loadNamespaces';
import {
  AppState,
  wrapper,
} from '../modules/store';
import Link from 'next/link';



const Home = (props: any) => {
  const siteTitle = 'some Title';
  const siteDescription = 'some Descr';

  const {
    data, getHomeRequest, getHomeSuccess, getHomeError,
  } = props;

  console.log('home', props);

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

          <h1>Home — getServerSideProps</h1>

          <br />

          <p>
            <Link href="/market">

              Go to market

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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  // console.log('store', store);
  // console.log('ctx', ctx);

  // const translations = await serverSideTranslations(ctx.locale as string, ['common']);
  // console.log('translations', translations);

  console.log('HOME getServerSideProps');


  return {
    props: {
      // ...(await serverSideTranslations(ctx.locale as string, ['common'])),
      // ...(await loadNamespaces({
      //   locale: ctx.locale,
      //   pathname: '/',
      // })),
      // Will be passed to the page component as props
    },
  };
});

const mapStateToProps = (state: AppState) => {
  const {
    app: { hydrated }
  } = state;

  return {
    hydrated,
  };
};

export default connect(mapStateToProps)(memo(Home));
