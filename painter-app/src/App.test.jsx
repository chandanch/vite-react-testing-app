import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';
import { kebabCaseToTitleCase } from './helpers/textTransformer';

test('button has a default color', () => {
	render(<App />);

	const buttonElement = screen.getByRole('button', { name: /Midnight Blue/i });
	expect(buttonElement).toHaveClass('medium-violet-red');
});

test('button has a default text', () => {});

test('button color is changed on btn click', () => {
	// 1. render the app
	render(<App />);

	// 2. get the default/initial button element
	const buttonElement = screen.getByRole('button', { name: /Midnight Blue/i });

	// 3. check the initial button color
	expect(buttonElement).toHaveClass('medium-violet-red');

	// 4. click on button
	fireEvent.click(buttonElement);

	// 2. check the btn color after click - must be blue
	expect(buttonElement).toHaveClass('midnight-blue');
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

test('should contain app title', () => {
	render(<App />);

	const headingElement = screen.getByRole('heading');
	expect(headingElement).toHaveTextContent('Painter App!');
});

test('color button must be disabled and checkbox must be unchecked by default', () => {
	render(<App />);

	const buttonElement = screen.getByRole('button', { name: /blue/i });
	const checkboxElement = screen.getByRole('checkbox', {
		name: /disable color/i,
	});

	expect(buttonElement).toBeEnabled();
	expect(checkboxElement).not.toBeChecked();
});

test('color button must toggle based on checkbox state', () => {
	render(<App />);

	const buttonElement = screen.getByRole('button', { name: /blue/i });
	const checkboxElement = screen.getByRole('checkbox', {
		name: /disable color/i,
	});

	// 1. check the checkbox
	fireEvent.click(checkboxElement);

	// check if btn is disabled
	expect(buttonElement).toBeDisabled();

	// check if checkbox is checked
	expect(checkboxElement).toBeChecked();

	// uncheck the checkbox
	fireEvent.click(checkboxElement);

	// check if btn is disabled
	expect(buttonElement).toBeEnabled();

	// check if checkbox is checked
	expect(checkboxElement).not.toBeChecked();
});

test('button color must be gray when disabled', () => {
	render(<App />);

	const buttonElement = screen.getByRole('button', { name: /blue/i });
	const checkboxElement = screen.getByRole('checkbox', {
		name: /disable color/i,
	});

	// 1. check the checkbox
	fireEvent.click(checkboxElement);

	expect(buttonElement).toHaveClass('gray');

	fireEvent.click(checkboxElement);

	fireEvent.click(buttonElement);

	expect(buttonElement).toHaveClass('midnight-blue');
});

describe('Test Text Transformer', () => {
	test('with no hypens', () => {
		const testText = kebabCaseToTitleCase('red');

		expect(testText).toBe('Red');
	});

	test('with one hypens', () => {
		const testText = kebabCaseToTitleCase('red-green');

		expect(testText).toBe('Red Green');
	});

	test('with one hypens', () => {
		const testText = kebabCaseToTitleCase('red-green-blue');

		expect(testText).toBe('Red Green Blue');
	});
});
