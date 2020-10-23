module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['./plugin-ngc'],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
