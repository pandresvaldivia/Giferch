import SearchCategory from './SearchCategory';
import GifGrid from './GifGrid';
import Header from './Header';
import { useState } from 'react';

const GifExpertApp = () => {
	const [category, setCategory] = useState('Rick and Morty');

	return (
		<>
			<Header />
			<main className="px-8 py-6 max-w-screen-xl mx-auto">
				<SearchCategory category={category} setCategory={setCategory} />
				<GifGrid category={category} amount={16} />
			</main>
		</>
	);
};

export default GifExpertApp;
