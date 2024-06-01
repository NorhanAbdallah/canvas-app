module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "prefer-const": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-newline": 2,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "import/prefer-default-export": 0,
    "import/order": [
      2,
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "**/*.svg",
            group: "index",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 2,
    "arrow-body-style": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
    "jest/no-conditional-expect": 1,
    "import/first": 2,
    "import/no-named-as-default": 0,
    "import/no-absolute-path": [
      2,
      { esmodule: true, commonjs: true, amd: false },
    ],
    "padding-line-between-statements": [
      2,
      {
        blankLine: "always",
        prev: "*",
        next: [
          "return",
          "switch",
          "function",
          "multiline-const",
          "export",
          "multiline-expression",
          "block",
          "block-like",
        ],
      },
      {
        blankLine: "always",
        prev: ["switch", "function", "multiline-const", "multiline-expression"],
        next: "*",
      },
    ],
  },
};