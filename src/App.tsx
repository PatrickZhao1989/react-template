import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';

interface MyButtonInput {
	count: number;
	onClick: () => void;
}

const App = () => {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div>
			<div className="App">
				<MyButton count={count} onClick={handleClick} />
				<MyButton count={count} onClick={handleClick} />
			</div>
			<div>
				<TextField firstName="Patrick" lastName="Zhao" />
			</div>
		</div>
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

export default App;
