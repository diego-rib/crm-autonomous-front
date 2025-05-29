import { defineConfig, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss'

import { textStyles } from './src/assets/text.styles'
import { buttonsStyles } from './src/assets/button.styles'

export default defineConfig({
  shortcuts: [
    {
      ...buttonsStyles,
      ...textStyles,
      container: 'px-4 lg:px-8 xl:px-12',
    },
  ],
  theme: {
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      blue: '#1E2EDE',
      red: '#9A031E',
      green: '#BAFF29',
      orange: '#FF8811',
      gray: '#9CAFB7',
    },
  },
  presets: [presetWind3],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
