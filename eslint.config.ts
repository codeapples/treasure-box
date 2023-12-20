import { GLOB_TSX, sxzz } from '@sxzz/eslint-config'

const config = sxzz(
  [
    {
      ignores: ['dist/*', '.vscode/*', '.prettierrc'],
    },
    {
      rules: {
        'unused-imports/no-unused-vars': 'warn',
      },
    },
    {
      files: [GLOB_TSX],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
  {
    unocss: false,
    sortKeys: true,
  },
)

export default config
