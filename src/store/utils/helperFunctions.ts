export function uppercaseFirstLetter(text: string) {
	if (text.length === 0) {
		return "";
	}
	if (text.length === 1) {
		return text.toUpperCase();
	}
	return text[0].toUpperCase() + text.slice(1);
}
export function roundDecimalPlaces(
	number: number,
	decimalPlaces?: number
): number {
	const appliedDecimalPlaces =
		decimalPlaces && decimalPlaces > 0 ? decimalPlaces * 10 : 1;
	return Math.round(number * appliedDecimalPlaces) / appliedDecimalPlaces;
}
