import './App.css';
import React, { useState } from 'react';
import { kebabCaseToTitleCase } from './helpers/textTransformer';

function App() {
	const [btnColor, setBtnColor] = useState('medium-violet-red');
	const nextBtnColor =
		btnColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';
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
				Change Color to {kebabCaseToTitleCase(nextBtnColor)}
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
