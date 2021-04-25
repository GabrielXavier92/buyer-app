module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'max-len': [2, 130, 4, { ignoreUrls: true }],
    'react/prop-types': 0,
    'import/no-named-as-default': 0,
    'object-curly-newline': 0,
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-cycle': 'off',
    'operator-linebreak': 'off',
    '@typescript-eslint/indent': 'off',
  },
};
