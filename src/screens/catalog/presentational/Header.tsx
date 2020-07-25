import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./../../../Theme";

const styles: Styles = {
	container: {
		display: "flex",
		alignItems: "center",
		boxShadow: defaultStyles.defaultShadow,
		padding: defaultStyles.metrics.mediumMargin,
		borderRightWidth: 2,
		borderColor: defaultStyles.colors.gray,
		borderRightStyle: "solid"
	},
	logo: {
		height: "50px"
	},
	generation: {
		marginRight: defaultStyles.metrics.mediumMargin,
		marginLeft: defaultStyles.metrics.mediumMargin
	},
	formContainer: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "flex-end"
	},
	searchBar: {
		padding: defaultStyles.metrics.mediumMargin,
		border: "none",
		backgroundColor: defaultStyles.colors.lightGray,
		borderRadius: 0
	},
	shoppingCartButton: {
		padding: defaultStyles.metrics.mediumMargin,
		textDecoration: "none"
	},
	shoppingCartButtonIcon: {
		marginRight: defaultStyles.metrics.smallMargin
	}
};
interface HeaderProps {
	isMobile: boolean;
	inputRef: React.RefObject<HTMLInputElement>;
	enableShoppingCartButton: boolean;
	shoppingCartCount: number;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export function Header(props: HeaderProps) {
	const theme = useTheme();
	return (
		<div
			style={{ ...styles.container, backgroundColor: theme.headerColor }}
		>
			<img style={styles.logo} src="/pokemon-store/assets/logo.svg"></img>
			<div style={{ ...styles.generation, color: theme.headerTextColor }}>
				First Generation
			</div>
			<form style={styles.formContainer} onSubmit={props.onSubmit}>
				<input
					name="teste"
					style={styles.searchBar}
					ref={props.inputRef}
					type="text"
					placeholder="Search Pokemon..."
				/>
			</form>
			{props.isMobile && (
				<Link
					style={{
						...styles.shoppingCartButton,
						color: theme.headerTextColor
					}}
					to={"/pokemon-store/shopping-cart"}
				>
					<FontAwesomeIcon
						style={styles.shoppingCartButtonIcon}
						icon={faShoppingCart}
					/>
					{props.shoppingCartCount}
				</Link>
			)}
		</div>
	);
}
