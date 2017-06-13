module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "globals": {
    "d3": false,
    "$": false
  },
  "rules": {
    "comma-dangle": ["error", "never"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": ["warn"],
    "no-console": 0,
    "no-trailing-spaces": ["warn"]
  }
};