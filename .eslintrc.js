module.exports = {
  parser: 'babel-eslint',
  root: true,
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
  ],
  env: {
    node: true,
  },
  plugins: [
    'flowtype',
    'import',
  ],
  settings: {
    'import/resolver': 'node',
  },
  rules: {
    // Consistent arrow parens
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'import/extensions': ['error', 'always', {
        js: 'never',
    }],
    // Let git handle the linebreaks instead
    'linebreak-style': 'off',
    // Additional allowance for flow annotations
    'max-len': ['error', 120],
    // Allow Boom's lowercase constructors
    'new-cap': ['error', {
      'newIsCapExceptionPattern': '^Boom\..',
    }],
    // Allow reassign to ctx object
    'no-param-reassign': ['error', { 'props': false }],
  },
};
