import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import GiftCard from './GiftCard';

const GifGrid = ({ amount }) => {
	const [giftList, setGiftList] = useState([]);

	useEffect(() => {
		getGifs('dogs');
	});

	const getGifs = async (category) => {
		const url = `https://api.giphy.com/v1/gifs/search?api_key=2s9S93EcZl97rGL4Zms21E7qCRusVxGf&q=${category}&limit=${amount}&offset=0&rating=g&lang=en`;

		const resp = await fetch(url);
		const { data } = await resp.json();

		const gifList = data.map(({ id, title, images, url }) => ({
			id,
			title,
			image: images.downsized_medium.url,
			url,
		}));

		setGiftList(gifList);
	};

	return (
		<section
			className="grid grid-cols-2 md:grid-cols-4"
			aria-label="Search results"
		>
			{giftList.map(({ id, title, image, url }) => (
				<GiftCard key={id} title={title} image={image} url={url} />
			))}
		</section>
	);
};

GifGrid.propTypes = {
	amount: PropTypes.number,
};

GifGrid.defaultProps = {
	amount: 10,
};

export default GifGrid;
