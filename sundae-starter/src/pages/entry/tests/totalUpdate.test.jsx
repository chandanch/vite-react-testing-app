import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import Options from '../Options';

describe('total update tests', () => {
	test('scoops sub total must have a default value', () => {
		render(<Options optionType="scoops" />);

		const scoopsSubTotal = screen.getByText('Scoops total: $', {
			exact: false,
		});

		expect(scoopsSubTotal).toHaveTextContent('0.00');
	});
});
