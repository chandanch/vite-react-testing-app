import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SummaryForm from '../SummaryForm';

describe('Order Summary: Summary Form Test', () => {
	test('button must be disabled and checkbox must be unchecked by default', () => {
		render(<SummaryForm />);

		const buttonElement = screen.getByRole('button', { name: /confirm/i });
		expect(buttonElement).toBeDisabled();

		const checkboxElement = screen.getByRole('checkbox', { name: /terms/i });
		expect(checkboxElement).not.toBeChecked();
	});

	test('button must be enabled when checkbox is checked', () => {
		render(<SummaryForm />);

		const checkboxElement = screen.getByRole('checkbox', {
			name: /terms/i,
		});

		fireEvent.click(checkboxElement);
		const buttonElement = screen.getByRole('button', { name: /confirm/i });

		expect(buttonElement).toBeEnabled();
	});
});
