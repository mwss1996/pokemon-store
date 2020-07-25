import * as React from "react";
import { Styles } from "./Styles";
import { defaultStyles } from "./defaultStyles";

const styles: Styles = {
	container: {
		height: "100vh",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	logo: {
		height: "70px"
	},
	label: {
		marginTop: defaultStyles.metrics.mediumMargin,
		marginBottom: defaultStyles.metrics.mediumMargin
	},
	counter: {
		fontSize: defaultStyles.fontSizes.large
	}
};
interface LoadingProps {
	currentPokemon: number;
	pokemonCount: number;
}
export function Loading(props: LoadingProps) {
	return (
		<div style={styles.container}>
			<img style={styles.logo} src="/pokemon-store/assets/logo.svg"></img>
			<div style={styles.label}>Downloading Pokemon List</div>
			<div style={styles.counter}>
				{props.currentPokemon} of {props.pokemonCount}
			</div>
		</div>
	);
}
