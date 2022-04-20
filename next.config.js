const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });
// const { i18n } = require('./next-i18next.config');
// const { i18n } = require('./i18n.js');

const nextTranslate = require('next-translate');

const { env } = process;

module.exports = nextTranslate(
  {
  // i18n,
  // Will be available on both server and client
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    publicRuntimeConfig: {
      baseUrl: env.BASE_URL,
      apiUrl: env.API_URL,
    },
    serverRuntimeConfig: {
      env: env.NODE_ENV || 'development',
      allowCrawler: env.ALLOW_CRAWLER === 'true',
    },
    typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
      ignoreBuildErrors: env.IGNORE_BUILD_ERRORS === 'true',
    },
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
      ignoreDuringBuilds: env.IGNORE_DURING_BUILDS === 'true',
    },
  },
);
