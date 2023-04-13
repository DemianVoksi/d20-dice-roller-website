import { SiteContext } from '@/utils/ContextProvider';
import { Flex, FormControl, Input } from '@chakra-ui/react';
import { useContext } from 'react';

export const Modifier = () => {
	const values = useContext(SiteContext);

	return (
		<Flex>
			<FormControl>
				<Input
					type='number'
					placeholder='Enter modifier'
					value={values?.modifier!}
					onChange={(e) => values?.setModifier(Number(e.target.value))}
				/>
			</FormControl>
		</Flex>
	);
};
