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
			justify='center'
			align='center'
			marginTop='60px'
			h={{ xl: '30vh', lg: '15vh', md: '15vh', sm: '10vh' }}
			w={{ xl: '20vh', lg: '20vh', md: '20vh', sm: '30vh' }}
		>
			<Flex direction={{ xl: 'column', lg: 'row', md: 'row', sm: 'row' }}>
				<Flex
					justify={{ xl: 'center', lg: 'center', md: 'cener', sm: 'center' }}
					align={{ xl: 'flex-end', lg: 'center', md: 'center', sm: 'center' }}
				>
					{props.children}
				</Flex>
				<Flex direction='column' justify='center' align='center' h='16vh'>
					<Flex
						justify='center'
						align='flex-end'
						color='black'
						_hover={{ color: 'redLight' }}
					>
						<BiUpArrow
							size='60%'
							color='currentColor'
							onClick={() => values?.handleIncrement(props.identity)}
						/>
					</Flex>
					<Flex justify='center' align='center'>
						<Text color='black' fontSize='20px'>
							{values?.diceNumbers[props.identity]}
						</Text>
					</Flex>
					<Flex
						justify='center'
						align='flex-start'
						color='black'
						_hover={{ color: 'redLight' }}
					>
						<BiDownArrow
							size='60%'
							color='currentColor'
							onClick={() => values?.handleDecrement(props.identity)}
						/>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
