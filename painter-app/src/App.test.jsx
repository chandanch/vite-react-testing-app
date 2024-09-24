import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('button has a default color', () => {
	render(<App />);

	const buttonElement = screen.getByRole('button', { name: /blue/i });
	expect(buttonElement).toHaveClass('red');
});

test('button has a default text', () => {});

test('button color is changed on btn click', () => {
	// 1. render the app
	render(<App />);

	// 2. get the default/initial button element
	const buttonElement = screen.getByRole('button', { name: /blue/i });

	// 3. check the initial button color
	expect(buttonElement).toHaveClass('red');

	// 4. click on button
	fireEvent.click(buttonElement);

	// 2. check the btn color after click - must be blue
	expect(buttonElement).toHaveClass('blue');
});

test('button text is changed on btn click', () => {
	// 1. render the app
	render(<App />);

	// 2. get the default/initial button element
	const buttonElement = screen.getByRole('button', { name: /blue/i });

	// 3. check the initial button color
	expect(buttonElement).toHaveTextContent(/blue/i);

	// 4. click on button
	fireEvent.click(buttonElement);

	// 2. check the btn color after click - must be blue
	expect(buttonElement).toHaveTextContent(/red/i);
});
