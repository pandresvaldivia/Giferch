import PropTypes from 'prop-types';

const GifCard = ({ title, image, url }) => {
	return (
		<article className="gif-card rounded-lg overflow-hidden relative">
			<figure className="w-full h-full relative">
				<img src={image} alt={title} className="w-full h-full object-cover" />
				<figcaption className="gif-card__description absolute text-center p-4 inset-0 flex items-center transition-opacity justify-center opacity-0 bg-slate-900/95">
					{title}
				</figcaption>
			</figure>
			<a
				href={url}
				aria-label={`See ${title}`}
				title={`See ${title}`}
				className="absolute inset-0"
				target="_blank"
				rel="noopener noreferrer"
			>
				{' '}
			</a>
		</article>
	);
};

GifCard.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GifCard;
