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

export const MainContent = () => {
	return (
		<Box display='flex' flexDirection='row'>
			<DieCard>
				<GiD4 size='40%' />
			</DieCard>
			<DieCard>
				<GiPerspectiveDiceThree size='40%' />
			</DieCard>
			<DieCard>
				<GiDiceEightFacesEight size='40%' />
			</DieCard>
			<DieCard>
				<GiD10 size='40%' />
			</DieCard>
			<DieCard>
				<GiD12 size='40%' />
			</DieCard>
			<DieCard>
				<GiDiceTwentyFacesOne size='40%' />
			</DieCard>
			<DieCard>
				<Box
					display='flex'
					flexDirection='row'
					justifyContent='center'
					alignItems='center'
				>
					{/* <GiD10 size='70%' /> */}
					<Heading fontSize='50px' padding='100%'>
						%
					</Heading>
				</Box>
			</DieCard>
		</Box>
	);
};
