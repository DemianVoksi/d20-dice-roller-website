import { SiteContext } from '@/utils/ContextProvider';
import { Flex, FormControl, Input } from '@chakra-ui/react';
import { useContext } from 'react';

export const Modifier = () => {
	const values = useContext(SiteContext)!;

	const handleModifier = (e: React.ChangeEvent<HTMLInputElement>) => {
		values.setModifier(e.target.value);
	};

	return (
		<Flex>
			<FormControl>
				<Input
					type='text'
					placeholder='Enter modifier'
					value={values?.modifier || ''}
					onChange={handleModifier}
				/>
			</FormControl>
		</Flex>
	);
};
