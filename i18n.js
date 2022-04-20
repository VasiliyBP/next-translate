module.exports = {
  locales: ['en', 'de', 'ru'],
  defaultLocale: 'en',
  // loader: false,
  pages: {
    '*': ['common'],
    // '/': ['common'],
    // '/market': ['common'],
  },
  loadLocaleFrom: (l, n) => import(`@next-translate-root/public/locales/${l}/${n}`).then((m) => m.default),
};
