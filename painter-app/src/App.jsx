import './App.css';
import React, { useState } from 'react';

function App() {
	const [btnColor, setBtnColor] = useState('red');
	const nextBtnColor = btnColor === 'red' ? 'blue' : 'red';
	const [isColorBtnDisabled, setColorBtnState] = useState(false);

	const changeBtnColor = () => {
		setBtnColor(nextBtnColor);
	};

	const toggleColorBtnState = (e) => {
		setColorBtnState(e.target.checked);
	};

	return (
		<div>
			<h1>Painter App!</h1>
			<button
				className={isColorBtnDisabled ? 'gray' : btnColor}
				onClick={changeBtnColor}
				disabled={isColorBtnDisabled}
			>
				Change Color to {nextBtnColor}
			</button>
			<input
				type="checkbox"
				name="disable color"
				aria-label="disable color"
				defaultChecked={false}
				id="disable-color-checkbox"
				onChange={toggleColorBtnState}
			/>
			<label htmlFor="disable-color-checkbox">Disable Color</label>
		</div>
	);
}

export default App;
