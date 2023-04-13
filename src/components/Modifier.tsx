import { SiteContext } from '@/utils/ContextProvider';
import { Flex, FormControl, Input } from '@chakra-ui/react';
import { useContext } from 'react';

export const Modifier = () => {
	const values = useContext(SiteContext)!;

	const handleModifier = (e: React.ChangeEvent<HTMLInputElement>) => {
		values?.setModifier(e.target.value);
	};

	return (
		<Flex marginTop={{ lg: '15px', md: '15px', sm: '15px' }}>
			<FormControl>
				<Input
					type='text'
					placeholder='Enter modifier'
					maxLength={4}
					value={values?.modifier!}
					onChange={(e) => handleModifier(e)}
				/>
			</FormControl>
		</Flex>
	);
};
