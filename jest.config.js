module.exports = {
  preset: 'react-native',
  setupFiles: ['./__tests__/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.(spec|test).(js|tsx)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'node', 'json'],
  testPathIgnorePatterns: [
    './node_modules',
    './android',
    './ios',
    '<rootDir>/__tests__/jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@@react-native|react-native|unimodules-permissions-interface|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)',
  ],
};
