exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /lazysizes/,
      loader: 'null-loader',
    })
  }
}
