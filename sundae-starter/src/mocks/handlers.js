import { delay, http, HttpResponse } from 'msw';

export const handlers = [
	// Intercept "GET request...
	http.get('http://localhost:3030/scoops', () => {
		// ...and respond to them using this JSON response.
		return HttpResponse.json([
			{
				name: 'Chocolate',
				imagePath: 'images/chocolate.png',
			},
			{
				name: 'Vanilla',
				imagePath: 'images/vanilla.png',
			},
		]);
	}),

	http.get('http://localhost:3030/toppings', () => {
		// ...and respond to them using this JSON response.
		return HttpResponse.json([
			{
				name: 'Cherries',
				imagePath: 'images/cherries.png',
			},
			{
				name: 'Hot Fudge',
				imagePath: 'images/hot-fudge.png',
			},
			{
				name: 'M&Ms',
				imagePath: 'images/m-and-ms.png',
			},
		]);
	}),

	http.post('http://localhost:3030/order', () => {
		delay(1000);

		return HttpResponse(
			{ id: 1232 },
			{
				status: 201,
			}
		);
	}),
];
