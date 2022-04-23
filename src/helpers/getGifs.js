export const getGifs = async (category, amount) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=2s9S93EcZl97rGL4Zms21E7qCRusVxGf&q=${category}&limit=${amount}&offset=0&rating=g&lang=en`;

	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifList = data.map(({ id, title, images, url }) => ({
		id,
		title,
		image: images.downsized_medium.url,
		url,
	}));

	return gifList;
};
