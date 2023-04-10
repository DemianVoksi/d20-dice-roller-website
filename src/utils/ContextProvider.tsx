import React, { createContext, useState } from 'react';

type UserContextProviderProps = {
	children: React.ReactNode;
};

type ValueTypes = {
	diceNumbers: number[];
	setDiceNumbers: React.Dispatch<React.SetStateAction<number[]>>;
	rollResult: (string | (number | number[])[])[][] | null;
	setRollResult: React.Dispatch<
		React.SetStateAction<(string | (number | number[])[])[][] | null>
	>;
	handleIncrement: (index: number) => void;
	handleDecrement: (index: number) => void;
	handleReset: () => void;
	getResultsOfAllDies: () => void;
};

export const SiteContext = createContext<ValueTypes | null>(null);

export const ContextProvider = ({ children }: UserContextProviderProps) => {
	let [diceNumbers, setDiceNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
	let [rollResult, setRollResult] = useState<
		(string | (number | number[])[])[][] | null
	>(null);

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

	const getRandomNumber = (dieNum: number): number => {
		let rand = 1 + Math.random() * dieNum;
		rand = Math.floor(rand);
		return rand;
	};

	const getDieArray = (numOfDies: number) => {
		const loopingArray: number[] = Array.from(Array(numOfDies).keys());
		return loopingArray;
	};

	const getDieTotal = (dieArray: number[], dieSides: number) => {
		let dieResults: number[] = [];
		const toLoopOver: number[] = dieArray;
		toLoopOver.forEach(() => dieResults.push(getRandomNumber(dieSides)));
		let dieTotal =
			dieResults.length > 0 ? dieResults.reduce((a, b) => a + b) : 0;
		return [dieResults, dieTotal];
	};

	const getResultsOfAllDies = () => {
		const d4Results = [getDieTotal(getDieArray(diceNumbers[0]), 4), 'd4'];
		const d6Results = [getDieTotal(getDieArray(diceNumbers[1]), 6), 'd6'];
		const d8Results = [getDieTotal(getDieArray(diceNumbers[2]), 8), 'd8'];
		const d10Results = [getDieTotal(getDieArray(diceNumbers[3]), 10), 'd10'];
		const d12Results = [getDieTotal(getDieArray(diceNumbers[4]), 12), 'd12'];
		const d20Results = [getDieTotal(getDieArray(diceNumbers[5]), 20), 'd20'];
		const d100Results = [getDieTotal(getDieArray(diceNumbers[6]), 100), 'd100'];
		const allResults = [
			d4Results,
			d6Results,
			d8Results,
			d10Results,
			d12Results,
			d20Results,
			d100Results
		];

		const allResultsFiltered = allResults.filter((result) => result[0][1] != 0);
		setRollResult(allResultsFiltered);
		console.log(allResultsFiltered);
	};

	return (
		<SiteContext.Provider
			value={{
				diceNumbers,
				setDiceNumbers,
				rollResult,
				setRollResult,
				handleIncrement,
				handleDecrement,
				handleReset,
				getResultsOfAllDies
			}}
		>
			{children}
		</SiteContext.Provider>
	);
};
