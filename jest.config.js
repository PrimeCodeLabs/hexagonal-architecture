module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["js", "json", "ts"],
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "../coverage",
  testMatch: ["**/__tests__/**/*.test.(ts|js)"],
};
