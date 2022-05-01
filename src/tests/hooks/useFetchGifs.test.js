import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('These are the tests for the useFetchGifs hook', () => {
	test('Should return the result of the hook', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('primal', 5));

		const { data, loading } = result.current;
		
		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test('Should return an array whit the results and false as a loading state', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('primal', 5)
		);

		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toEqual(5);
		expect(loading).toBe(false);
	});
});
