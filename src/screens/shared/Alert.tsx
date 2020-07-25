import {
	faCheckCircle,
	faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { defaultStyles } from "./defaultStyles";
import { Styles } from "./Styles";

const styles: Styles = {
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	},
	card: {
		backgroundColor: "white",
		padding: defaultStyles.metrics.largeMargin,
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
		width: 200
	},
	icon: {
		fontSize: "4em",
		alignSelf: "center"
	},
	successIcon: {
		color: defaultStyles.colors.green
	},
	alertIcon: {
		color: defaultStyles.colors.orange
	},
	text: {
		marginTop: defaultStyles.metrics.mediumMargin,
		marginBottom: defaultStyles.metrics.mediumMargin
	},
	button: {
		border: "none",
		cursor: "pointer",
		color: "white",
		backgroundColor: defaultStyles.colors.blue,
		padding: defaultStyles.metrics.mediumMargin,
		fontWeight: "bold"
	}
};
interface AlertProps {
	type: "success" | "alert";
	message: string;
	buttonLabel: string;
	onClickContinue: () => void;
}
export function Alert(props: AlertProps) {
	return (
		<div style={styles.container}>
			<div style={styles.card}>
				{props.type === "success" && (
					<FontAwesomeIcon
						style={{ ...styles.icon, ...styles.successIcon }}
						icon={faCheckCircle}
					/>
				)}
				{props.type === "alert" && (
					<FontAwesomeIcon
						style={{ ...styles.icon, ...styles.alertIcon }}
						icon={faExclamationCircle}
					/>
				)}
				<div style={styles.text}>{props.message}</div>
				<button style={styles.button} onClick={props.onClickContinue}>
					{props.buttonLabel}
				</button>
			</div>
		</div>
	);
}
