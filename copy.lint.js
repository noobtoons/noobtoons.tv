// module.exports = {
//   root: true,
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     'ecmaVersion': 8,
//     'sourceType': 'module',
//     'ecmaFeatures': {
//       'jsx': true,
//     },
//     'project': ['./tsconfig.json'],
//     'requireConfigFile': false,
//   },
//   plugins: ['babel', 'react', '@typescript-eslint'],
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//   },
//   'overrides': [
//     {
//       'files': ['*.tsx', '*.ts'],
//     }],
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'eslint-config-prettier',
//     'prettier',
//     'react-app',
//     'react-app/jest',
//   ],
//   rules: {
//     'max-len': ['error', { 'comments': 50, 'code': 80 }],
//     // 'import/prefer-default-export': [0],
//     // 'react-hooks/exhaustive-deps': 'warn',
//     // 'no-underscore-dangle': 0,
//     // 'no-unused-expressions': 0,
//     // 'no-throw-literal': 0,
//     'no-param-reassign': ['error', { 'props': false }],
//     'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0 }],
//     'spaced-comment': ['error', 'always', { 'exceptions': ['*'] }],
//     'padding-line-between-statements': ['error', {
//       'blankLine': 'always',
//       'prev': 'multiline-expression',
//       'next': 'multiline-expression',
//     }, { 'blankLine': 'never', 'prev': 'import', 'next': 'import' }],
//   },
//   // ignorePatterns: ['src/**/*.test.ts', 'src/frontend/generated/*'],
// };
