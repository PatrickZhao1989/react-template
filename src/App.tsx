import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Gallery } from './Gallery';

interface MyButtonInput {
	count: number;
	onClick: () => void;
}

export const App = () => {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<>
			<div className="App">
				<MyButton count={count} onClick={handleClick} />
				<MyButton count={count} onClick={handleClick} />
			</div>
			<div>
				<TextField firstName="Patrick" lastName="Zhao" />
			</div>
			<div>
				<Gallery />
			</div>
		</>
	);
};

const MyButton = (myButtonInput: MyButtonInput) => {
	return (
		<Button variant="outlined" onClick={myButtonInput.onClick}>
			Clicked {myButtonInput.count} times
		</Button>
	);
};

const TextField = (textFieldInput: { firstName: string; lastName: string }) => {
	return (
		<p>
			{textFieldInput.firstName} {textFieldInput.lastName}
		</p>
	);
};
