import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		flexBasis: 3,
		backgroundColor: defaultStyles.colors.gray
	}
};
interface CatalogProps {
	header: JSX.Element;
	productsOrEmpty: JSX.Element;
}
export function Catalog(props: CatalogProps) {
	return (
		<div style={styles.container}>
			{props.header}
			{props.productsOrEmpty}
		</div>
	);
}
