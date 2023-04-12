import { Box } from '@chakra-ui/react';
import { AiOutlinePercentage } from 'react-icons/ai';
import {
	GiD10,
	GiD12,
	GiD4,
	GiDiceEightFacesEight,
	GiDiceTwentyFacesTwenty,
	GiPerspectiveDiceSix
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
					<GiPerspectiveDiceSix size='40%' title='d6' />
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
					<GiDiceTwentyFacesTwenty size='40%' title='d20' />
				</DieCard>
				<DieCard identity={6} die={100}>
					<AiOutlinePercentage size='36%' title='d100' />
				</DieCard>
			</Box>
			<Roll />
		</>
	);
};
