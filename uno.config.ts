// uno.config.ts
import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        oswald: [
          {
            name: 'Oswald',
            weights: ['700'],
          },
        ],
      },
    }),
  ],
})
