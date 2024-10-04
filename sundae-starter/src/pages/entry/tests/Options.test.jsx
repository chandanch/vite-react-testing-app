import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Options from '../Options';

describe('Options test', () => {
	test('each option must display scoops image', async () => {
		render(<Options optionType="scoops" />);

		const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
		expect(scoopImages).toHaveLength(2);

		// check if alt text exists
		const altTexts = scoopImages.map((scoopImage) => scoopImage.alt);
		expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop']);
	});

	test('each option must display toppings image', async () => {
		render(<Options optionType="toppings" />);

		const toppingImages = await screen.findAllByRole('img', {
			name: /topping$/i,
		});
		expect(toppingImages).toHaveLength(3);

		// check if alt text exists
		const altTexts = toppingImages.map((scoopImage) => scoopImage.alt);
		expect(altTexts).toEqual([
			'Cherries topping',
			'Hot Fudge topping',
			'M&Ms topping',
		]);
	});
});
