import { createTamagui } from '@tamagui/core'
import { config as rawConfig } from './src/app/config'

const config = createTamagui(rawConfig)

export type AppConfig = typeof config

declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config

