import { myNewTheme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={myNewTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
