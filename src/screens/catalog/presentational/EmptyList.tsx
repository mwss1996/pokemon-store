import * as React from "react";
import { Styles } from "../../shared/Styles";
import { defaultStyles } from "../../shared/defaultStyles";

const styles: Styles = {
	container: {}
};
export function EmptyList() {
	return <div style={styles.container}>Sorry, there is nothing to show.</div>;
}
