import { Box } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<Box
			color='black'
			position='relative'
			bottom={0}
			h='1em'
			marginTop={{ sm: '30px' }}
		>
			<p>Made by Demian Vokši, 2023</p>
		</Box>
	);
};
