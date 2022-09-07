module.exports = {
  'config-sync': {
    enabled: true,
    config: {
      syncDir: 'config/sync/',
      minify: false,
      importOnBootstrap: false,
      customTypes: [
        {
          configName: 'foo',
          queryString: 'api::foo.foo',
          uid: 'name',
        },
      ],
      excludedTypes: [],
      excludedConfig: [],
    },
  },
}
