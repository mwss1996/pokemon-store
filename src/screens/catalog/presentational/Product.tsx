import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	container: {
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		margin: defaultStyles.metrics.mediumMargin,
		padding: defaultStyles.metrics.mediumMargin,
		boxShadow: defaultStyles.defaultShadow
	},
	id: {
		fontWeight: "bold"
	},
	image: {
		width: 100
	},
	name: {},
	price: {
		fontWeight: "bold"
	},
	button: {
		backgroundColor: defaultStyles.colors.green,
		color: "white",
		border: "none",
		borderRadius: 0,
		padding: defaultStyles.metrics.mediumMargin,
		fontWeight: "bold",
		cursor: "pointer",
		marginTop: defaultStyles.metrics.mediumMargin
	}
};
interface ProductProps {
	id: number;
	imageUrl: string;
	name: string;
	price: string;
	onClickAdd: () => void;
}
export function Product(props: ProductProps) {
	return (
		<div style={styles.container}>
			<span style={styles.id}>#{props.id}</span>
			<img style={styles.image} src={props.imageUrl}></img>
			<span style={styles.name}>{props.name}</span>
			<span style={styles.price}>{props.price}</span>
			<button style={styles.button} onClick={props.onClickAdd}>
				Add +
			</button>
		</div>
	);
}
