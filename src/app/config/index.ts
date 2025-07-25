import { tokens } from "./tokens";
import { shorthands } from "./shorthands";
import openSansFont from "./typography";
import { colors } from "./tokens/colors";

export const config = {
    tokens,
    shorthands,
    themes: {
        light: colors,
        dark: colors,
    },
    fonts: {
        heading: openSansFont,
        body: openSansFont,
    },
}
