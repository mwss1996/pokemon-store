import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		flexBasis: 500,
		overflow: "hidden"
	},
	mobileContainer: {
		flexGrow: 1
	},
	products: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		padding: defaultStyles.metrics.mediumMargin,
		overflow: "auto"
	},
	total: {
		display: "flex",
		flexDirection: "row",
		margin: defaultStyles.metrics.mediumMargin,
		marginBottom: 0
	},
	totalLabel: {
		fontWeight: "bold",
		flexGrow: 1,
		fontSize: "1.1em"
	},
	totalValue: {
		fontWeight: "bold",
		fontSize: "1.1em"
	},
	emptyCart: {
		flexGrow: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	button: {
		backgroundColor: defaultStyles.colors.green,
		border: "none",
		padding: defaultStyles.metrics.mediumMargin,
		color: "white",
		margin: defaultStyles.metrics.mediumMargin,
		fontWeight: "bold",
		cursor: "pointer"
	},
	disabledButton: {
		backgroundColor: defaultStyles.colors.darkGray
	}
};
interface ShoppingCartProps {
	isMobile: boolean;
	header: JSX.Element;
	products: JSX.Element[];
	total: string;
	onClickFinish: () => void;
}
export function ShoppingCart(props: ShoppingCartProps) {
	return (
		<div
			style={
				props.isMobile
					? { ...styles.container, ...styles.mobileContainer }
					: styles.container
			}
		>
			{props.header}
			{props.products.length > 0 ? (
				<div style={styles.products}>{props.products}</div>
			) : (
				<div style={styles.emptyCart}>Seu carrinho está vazio.</div>
			)}
			<div style={styles.total}>
				<div style={styles.totalLabel}>Total</div>
				<div style={styles.totalValue}>{props.total}</div>
			</div>
			<button
				style={
					props.products.length > 0
						? styles.button
						: { ...styles.button, ...styles.disabledButton }
				}
				onClick={
					props.products.length > 0 ? props.onClickFinish : () => {}
				}
			>
				Finish Buy
			</button>
		</div>
	);
}
