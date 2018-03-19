exports.modifyBabelrc = ({ babelrc }, options) =>
  Object.assign(babelrc, {
    plugins: babelrc.plugins.concat([
      ['babel-plugin-styled-components', Object.assign({ ssr: true }, options)],
    ]),
  })
