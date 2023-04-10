import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

type DieCardProps = {
	children: ReactNode;
};

export const DieCard = (props: DieCardProps) => {
	const handleOnClick = () => {
		console.log('arrow clicked');
	};

	return (
		<Box
			bg='grayDark'
			color='redLight'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			h='30vh'
			w='15vh'
		>
			{props.children}
			<BiUpArrow size='15%' onClick={handleOnClick} color='cremeLight' />
			<Text color='cremeLight' fontSize='20px'>
				0
			</Text>
			<BiDownArrow size='15%' color='cremeLight' />
		</Box>
	);
};
