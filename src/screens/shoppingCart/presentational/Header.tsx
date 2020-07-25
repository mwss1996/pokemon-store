import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./../../../Theme";

const styles: Styles = {
	container: {
		display: "flex",
		alignItems: "center",
		boxShadow: defaultStyles.defaultShadow,
		height: 70
	},
	title: {
		marginLeft: defaultStyles.metrics.mediumMargin,
		fontWeight: "bold",
		fontSize: "1.1em"
	},
	backButton: {
		height: 70,
		width: 70,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textDecoration: "none"
	},
	backButtonIcon: {
		fontSize: "1.2em"
	}
};
interface HeaderProps {
	isMobile: boolean;
}
export function Header(props: HeaderProps) {
	const theme = useTheme();
	return (
		<div
			style={{ ...styles.container, backgroundColor: theme.headerColor }}
		>
			{props.isMobile && (
				<Link
					style={{
						...styles.backButton,
						color: theme.headerTextColor
					}}
					to={"/pokemon-store/"}
				>
					<FontAwesomeIcon
						style={styles.backButtonIcon}
						icon={faChevronLeft}
					/>
				</Link>
			)}
			<div style={{ ...styles.title, color: theme.headerTextColor }}>
				Shopping Cart
			</div>
		</div>
	);
}
