import { SiteContext } from '@/utils/ContextProvider';
import { Box, Button } from '@chakra-ui/react';
import { useContext } from 'react';

export const Roll = () => {
	const values = useContext(SiteContext);

	return (
		<Box marginTop='25px'>
			<Button
				margin='10px'
				color='offWhite'
				bg='cremeDark'
				w='100px'
				onClick={() => values?.getResultsOfAllDies()}
			>
				Roll
			</Button>
			<Button
				margin='10px'
				color='offWhite'
				bg='redLight'
				w='100px'
				onClick={() => values?.handleReset()}
			>
				Reset all
			</Button>
		</Box>
	);
};
