import { SiteContext } from '@/utils/ContextProvider';
import { Box, Button } from '@chakra-ui/react';
import { useContext } from 'react';

type SingleRollInfoProps = {
	result: (string | (number | number[])[])[];
};

export const SingleRollInfo = (props: SingleRollInfoProps) => {
	const values = useContext(SiteContext);
	const newResult = props.result; // const newResult: (string | (number | number[])[])[]

	const handleTest = () => {
		// console.log(id);
		// console.log(totalSum);
		// console.log(arrayOfRolls);
		// let lengthofArrayOfRolls = arrayOfRolls.length; // ZAŠTO
		/*
    Property 'length' does not exist on type 'string | number | number[]'.
    Property 'length' does not exist on type 'number'.ts(2339)
    */

		values?.getResultsOfAllDies();
	};

	return (
		<Box>
			<Button onClick={() => handleTest()}>test</Button>
		</Box>
	);
};
