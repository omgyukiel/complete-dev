// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");
const createJestConfig = nextJest({});

module.exports = createJestConfig(nextJest({}));