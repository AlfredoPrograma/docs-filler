import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tanstackEslintPlugin from '@tanstack/eslint-plugin-query'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...tanstackEslintPlugin.configs["flat/recommended"],
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier")
];

export default eslintConfig;
