import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('Order Summary: Summary Form Test', () => {
	test('button must be disabled and checkbox must be unchecked by default', () => {
		render(<SummaryForm />);

		const buttonElement = screen.getByRole('button', { name: /confirm/i });
		expect(buttonElement).toBeDisabled();

		const checkboxElement = screen.getByRole('checkbox', { name: /terms/i });
		expect(checkboxElement).not.toBeChecked();
	});

	test('button must be enabled when checkbox is checked', async () => {
		const user = userEvent.setup();

		render(<SummaryForm />);

		const checkboxElement = screen.getByRole('checkbox', {
			name: /terms/i,
		});

		await user.click(checkboxElement);
		const buttonElement = screen.getByRole('button', { name: /confirm/i });

		expect(buttonElement).toBeEnabled();

		// uncheck checkbox
		await user.click(checkboxElement);

		expect(buttonElement).toBeDisabled();
	});

	test('popover should not be present by default', async () => {
		render(<SummaryForm />);

		const nullPopover = screen.queryByText(
			/ no icecream will actually be delivered/i
		);

		expect(nullPopover).not.toBeInTheDocument();
	});

	test('popover must be shown on hover', async () => {
		const user = userEvent.setup();

		render(<SummaryForm />);

		const tcElement = screen.queryByText(/Terms and Conditions/i);

		await user.hover(tcElement);

		const popoverElement = screen.queryByText(
			/No ice cream will actually be delivered/i
		);

		expect(popoverElement).toBeInTheDocument();
	});

	test('popover must be removed when unhovered', async () => {
		const user = userEvent.setup();

		render(<SummaryForm />);

		const tcElement = screen.queryByText(/terms and Conditions/i);
		await user.hover(tcElement);

		const popoverElement = screen.queryByText(
			/No ice cream will actually be delivered/i
		);

		expect(popoverElement).toBeInTheDocument();

		// unhover case
		await user.unhover(tcElement);
		expect(popoverElement).not.toBeInTheDocument();
	});

	test('terms and conditions text must be present by default', async () => {
		render(<SummaryForm />);

		const tcElement = screen.queryByText(/Terms and Conditions/i);

		expect(tcElement).toBeInTheDocument();
	});
});
