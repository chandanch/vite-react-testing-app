import { http, HttpResponse } from 'msw';

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
];
