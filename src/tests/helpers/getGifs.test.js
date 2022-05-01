import { getGifs } from '../../helpers/getGifs';

describe('These are the tests for the getGifs function', () => {
	const amount = 10;
	const category = 'cats';

	test('Should return an array with ten elements', async () => {
		await expect(getGifs(category, amount)).resolves.toHaveLength(amount);
	});

	test('Should return an empty array', async () => {
		await expect(getGifs('', amount)).resolves.toHaveLength(0);
	});
});
