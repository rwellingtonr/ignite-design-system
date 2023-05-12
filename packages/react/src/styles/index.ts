import { createStitches, defaultThemeMap } from "@stitches/react"
import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@ignite-ui/tokens"

const stylesStitches = createStitches({
	theme: {
		colors,
		fontSizes,
		fontWeights,
		fonts,
		lineHeights,
		radii,
		space,
	},
	themeMap: {
		...defaultThemeMap,
		width: "space",
		height: "space",
	},
	utils: {
		p: (value: string) => ({
			padding: value,
		}),
		py: (value: string) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		px: (value: string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		m: (value: string) => ({
			margin: value,
		}),
		mx: (value: string) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: string) => ({
			marginTop: value,
			marginBottom: value,
		}),
	},
})

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
	stylesStitches
