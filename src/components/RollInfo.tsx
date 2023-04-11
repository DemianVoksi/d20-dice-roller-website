import { SiteContext } from '@/utils/ContextProvider';
import { Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { SingleRollInfo } from './SingleRollInfo';

export const RollInfo = () => {
	const values = useContext(SiteContext);

	if (!values?.rollResult) {
		return <Text></Text>;
	} else
		return (
			<Flex>
				{values?.rollResult.map((result, index) => (
					<Flex key={index} direction='column'>
						{/* 
            result[0][0] == array of all rolls
            result[0][1] == total sum
            result[1] == die number ie d4
            */}
						<SingleRollInfo result={result} />
					</Flex>
				))}
			</Flex>
		);
};
