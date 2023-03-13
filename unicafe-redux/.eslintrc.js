module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
    'jest': true,
    'browser': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react', 'jest'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'indent': [
      'error',
      2
    ],
    'react/prop-types': 0,
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 0,
    'prefer-destructuring': 0,
    'object-property-newline': [
      'error', { 'allowAllPropertiesOnSameLine': true }
    ],
    'padded-blocks': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}