module.exports = {
  "extends": "airbnb",
  "plugins": [
   "react",
   "flowtype"
  ],
  "parser": "babel-eslint",
  "rules": {
    "strict": 2,
    "quotes": 2,
    "no-unused-vars": 2,
    "camelcase": 2,
    "no-underscore-dangle": 2,
    "no-console": 0,
    "no-plusplus": 0,
    "no-debugger": 0,
//    "comma-dangle": ["error", "always"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-unknown-property": [2, { "ignore": ["class", "for"] }],
    "react/require-default-props": 0,
    "react/forbid-prop-types": [0, { "forbid": ['array', 'object'] }],
    "jsx-a11y/no-static-element-interactions": [0, { handlers: [],},],
    "jsx-a11y/interactive-supports-focus": [0, { handlers: [],},],
    "class-methods-use-this": 0
  }
};