module.exports = {
  roots: ['<rootDir>/src']
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDiretory: 'coverage',
  testEnviroment: 'node';
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}