import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import Options from '../Options';
import userEvent from '@testing-library/user-event';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';

describe('total update tests', () => {
	test('scoops sub total must have a default value', () => {
		render(<Options optionType="scoops" />);

		const scoopsSubTotal = screen.getByText('Scoops total: $', {
			exact: false,
		});

		expect(scoopsSubTotal).toHaveTextContent('0.00');
	});

	test('scoop subtotal must be updated when scoops are added', async () => {
		const user = userEvent.setup();

		render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

		const scoopInputElement = await screen.findByRole('spinbutton', {
			name: 'Vanilla',
		});

		await user.clear(scoopInputElement);

		await user.type(scoopInputElement, '1');
		const scoopsSubTotal = screen.getByText('Scoops total: $', {
			exact: false,
		});
		expect(scoopsSubTotal).toHaveTextContent('2.00');

		const chocoscoopInputElement = await screen.findByRole('spinbutton', {
			name: 'Chocolate',
		});
		await user.clear(chocoscoopInputElement);
		await user.type(chocoscoopInputElement, '2');

		expect(scoopsSubTotal).toHaveTextContent('6.00');
	});
});
