import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles: Styles = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: defaultStyles.metrics.mediumMargin
	},
	id: {
		fontWeight: "bold",
		marginRight: defaultStyles.metrics.mediumMargin
	},
	name: {
		flexGrow: 1
	},
	price: {
		fontWeight: "bold"
	},
	button: {
		border: "none",
		backgroundColor: "white",
		marginLeft: defaultStyles.metrics.mediumMargin,
		padding: defaultStyles.metrics.mediumMargin,
		cursor: "pointer"
	}
};
interface ProductProps {
	id: number;
	name: string;
	price: string;
	onClickRemove: () => void;
}
export function Product(props: ProductProps) {
	return (
		<div style={styles.container}>
			<div style={styles.id}>#{props.id}</div>
			<div style={styles.name}>{props.name}</div>
			<div style={styles.price}>{props.price}</div>
			<button style={styles.button} onClick={props.onClickRemove}>
				<FontAwesomeIcon style={styles.addButtonIcon} icon={faTrash} />
			</button>
		</div>
	);
}
