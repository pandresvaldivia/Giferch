import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import Header from './Header';

const GifExpertApp = () => {
	return (
		<>
			<Header />
			<main className="px-8 py-6 max-w-screen-xl mx-auto">
				<AddCategory />
				<GifGrid amount={12} />
			</main>
		</>
	);
};

export default GifExpertApp;
