import { extendTheme } from '@chakra-ui/react';
import '@fontsource/catamaran';
import '@fontsource/caudex';

export const myNewTheme = extendTheme({
	colors: {
		black: '#030303',
		white: '#ffffff',
		offWhite: '#f9f9f9',
		grayDark: '#111111',
		grayLight: '#2d2d30',
		redLight: '#cb0610',
		redDark: '#930C10',
		creme: '#fffebd',
		cremeLight: '#e8e5d9',
		cremeDark: '#f3b71c'
	},
	fonts: {
		heading: `'Caudex', serif`,
		body: `'Catamaran', sans-serif`
	},
	breakpoints: {
		sm: '20em', // 480px
		md: '48em', // 768px
		lg: '62em', // 992px
		xl: '80em' // 1280px
	}
});
