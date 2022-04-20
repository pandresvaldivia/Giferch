import PropTypes from 'prop-types';

const GiftCard = ({ title, image, url }) => {
	return (
		<article>
			<figure>
				<img src={image} alt={title} />
				<figcaption>{title}</figcaption>
			</figure>
		</article>
	);
};

GiftCard.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GiftCard;
