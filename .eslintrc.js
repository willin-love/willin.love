// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['willin', '@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'import/prefer-default-export': 0,
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ]
  },
  settings: {
    'import/core-modules': ['vue', 'vuex', 'moment'],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', path.resolve(__dirname)],
            extensions: ['.js', '.vue'],
            alias: {
              // 主要是配置目录别名，以防 ESLint 报错
              '~': path.resolve(__dirname),
              '~~': path.resolve(__dirname),
              '@': path.resolve(__dirname),
              '@@': path.resolve(__dirname)
            }
          }
        }
      }
    }
  }
};
