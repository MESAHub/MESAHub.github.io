import { createOnyxiaUi, verdantPalette, defaultGetTypographyDesc } from "onyxia-ui";
import "onyxia-ui/assets/fonts/WorkSans/font.css";
import "onyxia-ui/assets/fonts/Marianne/font.css";

const { OnyxiaUi, ofTypeTheme } = createOnyxiaUi({
    BASE_URL: import.meta.env.BASE_URL,
    getTypographyDesc: params => {
        const typographyDesc = defaultGetTypographyDesc(params);

        return {
            ...typographyDesc,
            fontFamily: '"Work Sans", sans-serif'
        };
    },
    palette: {
        // Start from the built-in verdant palette, then override brand/use colors.
        ...verdantPalette,
        // Custom color overrides
        light: {
            ...verdantPalette.light,
            main: "#fafbff",
        },

    }
});

export { OnyxiaUi };

export type Theme = typeof ofTypeTheme;
