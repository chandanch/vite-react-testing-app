import { describe, expect, test } from 'vitest';
import { server } from '../../../mocks/server';
import { http, HttpResponse } from 'msw';
import { render, screen, logRoles } from '@testing-library/react';
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

		const { container } = render(<OrderEntry />);

		const alertElements = await screen.findAllByRole('alert');

		// eslint-disable-next-line testing-library/no-debugging-utils
		logRoles(container);

		// must display 2 error alerts - scoops and toppings
		expect(alertElements).toHaveLength(2);
	});
});
