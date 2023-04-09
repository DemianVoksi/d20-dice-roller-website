import { Card } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DieCardProps = {
	children: ReactNode;
};

export const DieCard = (props: DieCardProps) => {
	return (
		<Card bg='grayLight' color='redDark'>
			{props.children}
		</Card>
	);
};
