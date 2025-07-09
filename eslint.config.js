import js from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const settings = [
  { ignores: ['node_modules', 'build'] },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  eslintPluginPrettierRecommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'error'
    }
  }
]

export default defineConfig(settings)
