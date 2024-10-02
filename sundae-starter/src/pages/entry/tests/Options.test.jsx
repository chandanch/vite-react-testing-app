import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Options from '../Options';

describe('Options test', () => {
	test('each option must display image', () => {
		render(<Options optionType="scoops" />);

		const scoopImages = screen.getAllByRole('img', { name: /scoops$/i });
		expect(scoopImages).toHaveLength(2);

		// check if alt text exists
		const altTexts = scoopImages.map((scoopImage) => scoopImage.alt);
		expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop']);
	});
});
