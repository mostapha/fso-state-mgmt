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
    'indent': [
      'error',
      2
    ],

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
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'no-multi-spaces': ['error'],
    'key-spacing': ['error', {
      beforeColon: false
    }],
    'switch-colon-spacing': ['error', {
      'after': true,
      'before': false
    }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}