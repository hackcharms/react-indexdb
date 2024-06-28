module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','eslint-plugin-tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'warn',
    "tailwindcss/no-custom-classname": [
            "warn",
            {
                cssFiles: ["src/**/*.css"],
                callees: ["classnames", "clsx", "twMerge", "cn"],
                whitelist: ['mic-drop-animation','animate-triangle','circle-animate'],
                config: 'tailwind.config.ts',
                cssFiles: ['./index.css'],
            },
        ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
