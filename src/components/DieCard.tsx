import { SiteContext } from '@/utils/ContextProvider';
import { Flex, Text } from '@chakra-ui/react';
import { ReactNode, useContext } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

type DieCardProps = {
	identity: number;
	die: number;
	children: ReactNode;
};

export const DieCard = (props: DieCardProps) => {
	const values = useContext(SiteContext);

	return (
		<Flex
			bg='offWhite'
			color='black'
			direction={{ xl: 'column', lg: 'row', md: 'row', sm: 'row' }}
			justify='center'
			align='center'
			marginTop='60px'
			h='30vh'
			w='20vh'
		>
			{props.children}
			<Flex direction='column' justify='center' align='center'>
				<BiUpArrow
					size='40%'
					onClick={() => values?.handleIncrement(props.identity)}
					color='black'
				/>
				<Text color='black' fontSize='20px'>
					{values?.diceNumbers[props.identity]}
				</Text>
				<BiDownArrow
					size='38%'
					color='black'
					onClick={() => values?.handleDecrement(props.identity)}
				/>
			</Flex>
		</Flex>
	);
};
