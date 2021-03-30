module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  // moduleNameMapper: {
  //   '^react$': 'preact/compat',
  //   '^react-dom/test-utils$': 'preact/test-utils',
  //   '^react-dom$': 'preact/compat',
  //   '^components$': '<rootDir>/components',
  //   '^hooks$': '<rootDir>/hooks',
  //   '^store$': '<rootDir>/store',
  //   '^common/(.*)$': '<rootDir>/common/$1',
  //   '^services$': '<rootDir>/services',
  //   '^assets$': '<rootDir>/assets',
  //   '^styles$': '<rootDir>/styles',
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/__mocks__/fileMock.ts',
  //   '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts'
  // },
  modulePathIgnorePatterns: ['<rootDir>/__tests__/setupTests.tsx']
}
