import React, { createContext, useState } from 'react';

type UserContextProviderProps = {
	children: React.ReactNode;
};

type ValueTypes = {
	diceNumbers: number[];
	setDiceNumbers: React.Dispatch<React.SetStateAction<number[]>>;
	rollResult: DiceNumbersObject[];
	setRollResult: React.Dispatch<React.SetStateAction<DiceNumbersObject[]>>;
	modifier: number | string;
	setModifier: React.Dispatch<React.SetStateAction<number | string>>;
	handleIncrement: (index: number) => void;
	handleDecrement: (index: number) => void;
	handleReset: () => void;
	getResultsOfAllDies: () => void;
	getDieTotal: (dieArray: number[], dieSides: number) => (number | number[])[];
	getDieArray: (numOfDies: number) => number[];
};

export type DiceNumbersObject = {
	roll: number[];
	rollTotal: number;
	dieType: string;
};

export const SiteContext = createContext<ValueTypes | null>(null);

export const ContextProvider = ({ children }: UserContextProviderProps) => {
	let [diceNumbers, setDiceNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
	let [rollResult, setRollResult] = useState<DiceNumbersObject[]>([]);
	let [modifier, setModifier] = useState<number | string>('');

	const handleIncrement = (index: number) => {
		let tempNums = [...diceNumbers];
		if (tempNums[index] >= 30) {
			tempNums[index] = 30;
		} else {
			tempNums[index] += 1;
		}
		setDiceNumbers(tempNums);
	};

	const handleDecrement = (index: number) => {
		let tempNums = [...diceNumbers];
		if (tempNums[index] <= 0) {
			tempNums[index] = 0;
		} else {
			tempNums[index] -= 1;
		}
		setDiceNumbers(tempNums);
	};

	const handleReset = () => {
		setDiceNumbers([0, 0, 0, 0, 0, 0, 0]);
	};

	const handleModifier = () => {};

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
		return dieResults;
	};

	const getResultsOfAllDies = () => {
		const d4Result = getDieTotal(getDieArray(diceNumbers[0]), 4);
		const d6Result = getDieTotal(getDieArray(diceNumbers[1]), 6);
		const d8Result = getDieTotal(getDieArray(diceNumbers[2]), 8);
		const d10Result = getDieTotal(getDieArray(diceNumbers[3]), 10);
		const d12Result = getDieTotal(getDieArray(diceNumbers[4]), 12);
		const d20Result = getDieTotal(getDieArray(diceNumbers[5]), 20);
		const d100Result = getDieTotal(getDieArray(diceNumbers[6]), 100);

		const d4Object: DiceNumbersObject = {
			roll: d4Result,
			rollTotal: d4Result.length > 0 ? d4Result.reduce((a, b) => a + b) : 0,
			dieType: 'd4'
		};

		const d6Object: DiceNumbersObject = {
			roll: d6Result,
			rollTotal: d6Result.length > 0 ? d6Result.reduce((a, b) => a + b) : 0,
			dieType: 'd6'
		};
		const d8Object: DiceNumbersObject = {
			roll: d8Result,
			rollTotal: d8Result.length > 0 ? d8Result.reduce((a, b) => a + b) : 0,
			dieType: 'd8'
		};
		const d10Object: DiceNumbersObject = {
			roll: d10Result,
			rollTotal: d10Result.length > 0 ? d10Result.reduce((a, b) => a + b) : 0,
			dieType: 'd10'
		};
		const d12Object: DiceNumbersObject = {
			roll: d12Result,
			rollTotal: d12Result.length > 0 ? d12Result.reduce((a, b) => a + b) : 0,
			dieType: 'd12'
		};
		const d20Object: DiceNumbersObject = {
			roll: d20Result,
			rollTotal: d20Result.length > 0 ? d20Result.reduce((a, b) => a + b) : 0,
			dieType: 'd20'
		};
		const d100Object: DiceNumbersObject = {
			roll: d100Result,
			rollTotal: d100Result.length > 0 ? d100Result.reduce((a, b) => a + b) : 0,
			dieType: 'd100'
		};

		const allResults = [
			d4Object,
			d6Object,
			d8Object,
			d10Object,
			d12Object,
			d20Object,
			d100Object
		];

		const allResultsFiltered = allResults.filter(
			(result) => result.rollTotal != 0
		);
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
				modifier,
				setModifier,
				handleIncrement,
				handleDecrement,
				handleReset,
				getResultsOfAllDies,
				getDieTotal,
				getDieArray
			}}
		>
			{children}
		</SiteContext.Provider>
	);
};
