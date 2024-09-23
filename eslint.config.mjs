import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest', // You can specify the ECMAScript version
        sourceType: 'module' // Use ES modules
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: pluginReact
    },
    rules: {
      'react/display-name': 'warn' // Or "error" depending on your preference
      // Add other rules as needed
    }
  }
]

