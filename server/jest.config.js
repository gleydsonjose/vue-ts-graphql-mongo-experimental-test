module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "json", "jsx", "ts"],
  testEnvironment: "node",
  moduleNameMapper: {
    "@database/(.*)": "<rootDir>/src/database/$1"
  },
  preset: 'ts-jest',
};
