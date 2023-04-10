import { extendTheme } from '@chakra-ui/react';
import '@fontsource/catamaran';
import '@fontsource/caudex';

export const myNewTheme = extendTheme({
	colors: {
		black: '#030303',
		white: '#ffffff',
		grayDark: '#111111',
		grayLight: '#2d2d30',
		redLight: '#cb0610',
		redDark: '#930C10',
		creme: '#fffebd',
		cremeLight: '#e8e5d9',
		cremeDark: '#f7ce65'
	},
	fonts: {
		heading: `'Caudex', serif`,
		body: `'Catamaran', sans-serif`
	}
});
