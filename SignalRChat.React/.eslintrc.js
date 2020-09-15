const path = require('path');

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': { // webpack
      webpack: {
        config: path.resolve('./conf/webpack.common.js'),
        Actions: path.resolve("./src/store/actions"),
      }
    }
  },
  globals: {
    React: true,
    ReactDOM: true,
    PropTypes: true,
    Webpack: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
  ],
  parser: "babel-eslint",
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'require-yield': ['warn'],
    'no-console': ['warn', {
      'allow': ['warn', 'error']
    }],
    'indent': ['warn', 2, {
      'SwitchCase': 1
    }],
    'no-unused-vars': ['warn'],
    'no-unused-expressions': [2, {
      allowTernary: true
    }],
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'comma-dangle': ['warn', 'only-multiline'],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'react/destructuring-assignment': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    radix: 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.tsx']
    }, ],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-unresolved': [2, {
      caseSensitive: true
    }],
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
  }
};