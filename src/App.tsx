import React, { useState } from 'react';
import './App.css';

interface MyButtonInput {
	count: any;
	onClick: any;
}

function App() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div className="App">
			<MyButton count={count} onClick={handleClick} />
			<MyButton count={count} onClick={handleClick} />
		</div>
	);
}

function MyButton(myButtonInput: MyButtonInput) {
	return <button onClick={myButtonInput.onClick}>Clicked {myButtonInput.count} times</button>;
}

export default App;
