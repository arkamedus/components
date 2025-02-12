import React from "react";
import "./Content.css";
import { ContentProps } from "./Content.types";

const Content: React.FC<ContentProps> = ({ children, pad, grow }) => {
	const classes = ["oakd", "content", pad && "pad", grow && "grow"]
		.filter(Boolean)
		.join(" ");
	return (
		<div data-testid="Content" className={classes}>
			{children}
		</div>
	);
};

export default Content;

export const ContentRow: React.FC<ContentProps> = ({
	children,
	className,
	style ,
	pad , grow
}) => {
	const classes = ["oakd", "content-row", pad && "pad", grow && "grow"]
		.filter(Boolean)
		.join(" ");	return (
		<div style={style} data-testid="ContentRow" className={classes}>
			{children}
		</div>
	);
};
