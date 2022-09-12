Error.stackTraceLimit = 9999
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
          relations: [{
            queryString: 'api::bar.bar',
            relationName: 'bars',
            parentName: 'foo',
            relationSortFields: ['name'],
          }],
        },
      ],
      excludedTypes: [],
      excludedConfig: [],
    },
  },
}
