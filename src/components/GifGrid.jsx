import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import ErrorAlert from './ErrorAlert';
import GifCard from './GifCard';
import Spinner from './Spinner';

const GifGrid = ({ category, amount }) => {
	const { data: giftList, loading } = useFetchGifs(category, amount);

	return (
		<section aria-label="Search results">
			{loading ? (
				<Spinner />
			) : giftList.length === 0 ? (
				<ErrorAlert message="There are no results" />
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gif-grid-rows w-full gap-4">
					{giftList.map(({ id, title, image, url }) => (
						<GifCard key={id} title={title} image={image} url={url} />
					))}
				</div>
			)}
		</section>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
	amount: PropTypes.number,
};

GifGrid.defaultProps = {
	amount: 10,
};

export default GifGrid;
