import { createFont } from "@tamagui/core";

const openSansFont = createFont({
    family: `'openSans', 'openSans Fallback'`,
    size: {
      '1': 12,
      '2': 14,
      '3': 15,
      '4': 16,
      '5': 18,
      '6': 20,
      '7': 24,
      '8': 32,
      '9': 40,
      '10': 48,
      big: 30
    },
    lineHeight: {
      1: 17,
      2: 22,
      3: 25,
      4: 32,
      5: 40,
      6: 48,
      7: 56,
      8: 64,
      9: 72,
      10: 80,
    },
    weight: {
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
    },
    letterSpacing: {
      4: 0,
      8: -1,
    },
  
    // for native only, alternate family based on weight/style
    face: {
      // pass in weights as keys
      300: { normal: 'OpenSansLight', italic: 'OpenSansLight-Italic' },
      400: { normal: 'OpenSansRegular', italic: 'OpenSansRegular-Italic' },
      500: { normal: 'OpenSansMedium', italic: 'OpenSansMedium-Italic' },
      600: { normal: 'OpenSansSemiBold', italic: 'OpenSansSemiBold-Italic' },
      700: { normal: 'OpenSansBold', italic: 'OpenSansBold-Italic' },
      800: { normal: 'OpenSansExtraBold', italic: 'OpenSansExtraBold-Italic' },
    },
})

export default openSansFont