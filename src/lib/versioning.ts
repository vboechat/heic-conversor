import { readFileSync } from "fs";

export const getPackageVersion = (): string => {
  const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));

  return packageJson.version;
};
