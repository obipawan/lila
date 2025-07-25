import type { NextConfig } from "next";
import { withTamagui } from "@tamagui/next-plugin";

const tamagui = withTamagui({
  config: "./tamagui.config.ts",
  components: ['@tamagui/core'],
  appDir: true,
  outputCSS: process.env.NODE_ENV === 'development' ? null : './tamagui.css',
  disableExtraction: process.env.NODE_ENV === 'development',
  excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker'],
});

const nextConfig: NextConfig = tamagui({
  /* config options here */
  experimental: {
    inlineCss: true,
    
  },
} as NextConfig);

export default nextConfig;
