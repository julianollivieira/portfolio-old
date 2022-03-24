module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "next/core-web-vitals",
    "eslint:all",
    "plugin:@typescript-eslint/all",
    "plugin:import/typescript",
    "plugin:react/all",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "17.0.2",
    },
  },
  plugins: ["@typescript-eslint", "react", "tailwindcss", "prettier"],
  rules: {
    "max-statements": "off",
    "one-var": "off",
    "tailwindcss/classnames-order": "error",
    "tailwindcss/no-contradicting-classname": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "react/prop-types": "off",
    "react/jsx-max-depth": "off",
    "react/forbid-component-props": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore" },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
