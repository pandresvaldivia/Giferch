import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category, amount) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category, amount).then((giftResult) =>
			setState({ data: giftResult, loading: false })
		);
	}, [category, amount]);

	return state;
};
