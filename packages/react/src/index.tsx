import { styled } from "./styles"
import { ComponentProps } from "react"

export const Button = styled("button", {
	fontFamily: "$default",
	backgroundColor: "$ignite300",
	borderRadius: "$sm",
	height: "$10",
	border: 0,
	cursor: "pointer",
	fontWeight: "$bold",
	color: "$white",
	transition: "background-color 0.2s easy-in",

	"&:hover": {
		backgroundColor: "$ignite500",
	},

	variants: {
		size: {
			small: {
				fontSize: "$sm",
				padding: "$2 $4",
			},
			big: {
				padding: "$3 $6",
				fontSize: "$sm",
			},
		},
	},

	defaultVariants: {
		size: "small",
	},
})
export type ButtonProps = ComponentProps<typeof Button>
