module.exports = {
  "collectCoverageFrom": [
    "moudles/**/*.{js,jsx}"
  ],
  "resolver": "jest-pnp-resolver",
  "setupFiles": [
    "react-app-polyfill/jsdom"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/config/jest/setupTest.js",
  "testMatch": [
    "<rootDir>/modules/**/__tests__/**/?(*.)(spec|test).{js,jsx}",
  ],
  "testEnvironment": "jsdom",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
    "^.+\\.modules\\.(css|sass|scss)$"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ]
}
