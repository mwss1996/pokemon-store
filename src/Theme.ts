import { createTheming } from "@callstack/react-theme-provider";
import { defaultStyles } from "./screens/shared/defaultStyles";

export const { ThemeProvider, useTheme, withTheme } = createTheming({
	headerColor: "white",
	headerTextColor: defaultStyles.fontColors.regularText
});
