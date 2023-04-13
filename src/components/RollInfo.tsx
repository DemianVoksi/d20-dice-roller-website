import { SiteContext } from '@/utils/ContextProvider';
import { Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';

export const RollInfo = () => {
	const values = useContext(SiteContext);

	if (!values?.rollResult) {
		return <Text></Text>;
	} else
		return (
			<Flex
				direction='column'
				justify='center'
				align='center'
				h='100%'
				fontSize={20}
				flexGrow={1}
			>
				{values?.rollResult.map((result, index) => (
					<Flex key={index} margin='3px'>
						<Text>
							You have thrown {result.roll.length}
							{result.dieType} {result.roll.length === 1 ? 'die' : 'dies'}
							.&nbsp;
						</Text>
						<Flex>
							Your result was:&nbsp;
							{result.roll.map((item, index) => (
								<Text key={index}>{`${item},${' '}`}&nbsp;</Text>
							))}{' '}
							and the roll total was: {result.rollTotal}.&nbsp;
							{values.modifier
								? `After applying a modifier of ${
										values.modifier
								  }, the roll total was: ${
										result.rollTotal + Number(values.modifier)
								  }`
								: ''}
						</Flex>
					</Flex>
				))}
			</Flex>
		);
};
