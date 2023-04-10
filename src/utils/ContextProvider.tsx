import React, { createContext, useState } from 'react';

type UserContextProviderProps = {
	children: React.ReactNode;
};

type ValueTypes = {
	diceNumbers: number[];
	setDiceNumbers: React.Dispatch<React.SetStateAction<number[]>>;
	handleIncrement: (index: number) => void;
	handleDecrement: (index: number) => void;
	handleReset: () => void;
};

export const SiteContext = createContext<ValueTypes | null>(null);

export const ContextProvider = ({ children }: UserContextProviderProps) => {
	let [diceNumbers, setDiceNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

	const handleIncrement = (index: number) => {
		let tempNums = [...diceNumbers];
		tempNums[index] += 1;
		setDiceNumbers(tempNums);
	};

	const handleDecrement = (index: number) => {
		let tempNums = [...diceNumbers];
		tempNums[index] -= 1;
		setDiceNumbers(tempNums);
	};

	const handleReset = () => {
		setDiceNumbers([0, 0, 0, 0, 0, 0, 0]);
	};

	return (
		<SiteContext.Provider
			value={{
				diceNumbers,
				setDiceNumbers,
				handleIncrement,
				handleDecrement,
				handleReset
			}}
		>
			{children}
		</SiteContext.Provider>
	);
};
