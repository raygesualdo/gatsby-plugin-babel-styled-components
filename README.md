# gatsby-plugin-babel-styled-components

[![npm (scoped)](https://img.shields.io/npm/v/@raygesualdo/gatsby-plugin-babel-styled-components.svg?style=flat-square)](https://www.npmjs.com/package/@raygesualdo/gatsby-plugin-babel-styled-components)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A Gatsby plugin to add the [styled-components babel plugin]().

## Install

```shell
$ npm install --save @raygesualdo/gatsby-plugin-babel-styled-components
```

## How to Use

Add the plugin to your `gatsby-config.js` file.

```javascript
plugins: ['@raygesualdo/gatsby-plugin-babel-styled-components']
```

This plugin automatically enables the `ssr` feature. All other features can be configured via this plugin's config object.

```javascript
plugins: [
  {
    resolve: '@raygesualdo/gatsby-plugin-babel-styled-components',
    options: {
      ssr: true, // override default
      displayName: false,
      preprocess: true,
      minify: false,
      transpileTemplateLiterals: false,
    },
  },
]
```
