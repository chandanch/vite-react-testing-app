import { describe, expect, test } from 'vitest';
import { server } from '../../../mocks/server';
import { http, HttpResponse } from 'msw';
import { render, screen } from '@testing-library/react';
import OrderEntry from '../OrderEntry';

describe('Order Entry tests', () => {
	test('must display alert if data fetch fails', async () => {
		// mock error response by using reset handlers
		server.resetHandlers([
			http.get('http://localhost:3030/scoops', () => {
				return new HttpResponse(null, { status: 500 });
			}),

			http.get('http://localhost:3030/toppings', () => {
				return new HttpResponse(null, { status: 500 });
			}),
		]);

		render(<OrderEntry />);

		const alertElements = await screen.findAllByRole('alert', {
			name: /An unexpected error occurred. Please try again later.$/i,
		});

		expect(alertElements).toHaveLength(2);
	});
});
