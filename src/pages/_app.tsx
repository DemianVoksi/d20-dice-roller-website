import '@/styles/globals.css';
import { myNewTheme } from '@/styles/theme';
import { ContextProvider } from '@/utils/ContextProvider';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<ChakraProvider theme={myNewTheme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</ContextProvider>
	);
}
