import './App.css';
import React, { useState } from 'react';

function App() {
	const [btnColor, setBtnColor] = useState('red');
	const nextBtnColor = btnColor === 'red' ? 'blue' : 'red';

	const changeBtnColor = () => {
		setBtnColor(nextBtnColor);
	};

	return (
		<div>
			<h1>Painter App!</h1>
			<button className={btnColor} onClick={changeBtnColor}>
				Change Color to {nextBtnColor}
			</button>
		</div>
	);
}

export default App;
