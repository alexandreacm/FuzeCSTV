module.exports = {
  preset: 'react-native',
  setupFiles: ['./__tests__/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.(spec|test)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'node', 'json'],
  testPathIgnorePatterns: [
    './node_modules',
    './android',
    './ios',
    '<rootDir>/__tests__/jest.setup.js',
  ],
};
