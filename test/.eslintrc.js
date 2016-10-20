module.exports = {
  extends: 'plugin:ava/recommended',
  plugins: [
    'ava',
  ],
  rules: {
    // Testing tools in devDependencies aren't dependencies
    'import/no-extraneous-dependencies': ["error", {"devDependencies": true}],
  },
};
