import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'button-action':
      'flex flex-inline gap-2 items-center justify-center px-3 py-0.5 rounded hover:color-$vp-c-brand-2 hover:bg-$vp-c-default-soft',
    'border-base': 'border-color-$vp-c-divider',
    'text-brand': 'color-$vp-c-brand-1',
    'text-brand-yellow': 'color-$vp-c-yellow-1',
    'text-brand-red': 'color-$vp-c-red-1',
  },
  blocklist: ['container'],
  presets: [presetUno(), presetAttributify(), presetTypography(), presetIcons()],
  theme: {
    colors: {
      primary: 'var(--vp-c-brand)',
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: ['font-mono', 'mb0!', 'no-underline!', 'i-gravity-ui-person', 'i-gravity-ui-key'],
})
