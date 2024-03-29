module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: { requireConfigFile: false },
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  rules: {
    'no-console': 0,
    'no-alert': 0,
    'import/prefer-default-export': 0,
    'prefer-template': 0,
    'import/extensions': 0,
    'no-unused-vars': 0,
    'no-constant-condition': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
  },
};

