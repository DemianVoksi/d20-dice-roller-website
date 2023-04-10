import { Box, Heading } from '@chakra-ui/react';
import {
	GiD10,
	GiD12,
	GiD4,
	GiDiceEightFacesEight,
	GiDiceTwentyFacesOne,
	GiPerspectiveDiceThree
} from 'react-icons/gi';
import { DieCard } from './DieCard';
import { Roll } from './Roll';

export const MainContent = () => {
	return (
		<>
			<Box display='flex' flexDirection='row'>
				<DieCard identity={0} die={4}>
					<GiD4 size='40%' title='d4' />
				</DieCard>
				<DieCard identity={1} die={6}>
					<GiPerspectiveDiceThree size='40%' title='d6' />
				</DieCard>
				<DieCard identity={2} die={8}>
					<GiDiceEightFacesEight size='40%' title='d8' />
				</DieCard>
				<DieCard identity={3} die={10}>
					<GiD10 size='40%' title='d10' />
				</DieCard>
				<DieCard identity={4} die={12}>
					<GiD12 size='40%' title='d12' />
				</DieCard>
				<DieCard identity={5} die={20}>
					<GiDiceTwentyFacesOne size='40%' title='d20' />
				</DieCard>
				<DieCard identity={6} die={100}>
					<Box
						display='flex'
						flexDirection='row'
						justifyContent='center'
						alignItems='center'
					>
						<Heading fontSize='50px' padding='100%' title='d100'>
							%
						</Heading>
					</Box>
				</DieCard>
			</Box>
			<Roll />
		</>
	);
};
