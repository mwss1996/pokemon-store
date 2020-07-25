import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	container: {
		display: "flex",
		flexGrow: 1,
		flexDirection: "row",
		alignItems: "flex-start",
		flexWrap: "wrap",
		padding: defaultStyles.metrics.mediumMargin,
		overflow: "auto",
		alignContent: "flex-start"
	}
};
interface ProductsProps {
	products: JSX.Element[];
}
export function Products(props: ProductsProps) {
	return <div style={styles.container}>{props.products}</div>;
}
