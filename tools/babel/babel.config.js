module.exports = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'entry',
        targets: {
          browsers: ['last 2 versions', 'ie >= 11']
        }
      }
    ],
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'react-hot-loader/babel'
  ]
};
