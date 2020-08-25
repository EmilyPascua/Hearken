import { currentQuarter } from "../../utils";

export const updateTheme = () => {
	const theme = currentQuarter();

	return {
		type: 'UPDATE_THEME',
		class: theme,
		greeting: theme,
	}
}