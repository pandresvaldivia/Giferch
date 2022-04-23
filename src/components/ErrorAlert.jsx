import PropTypes from 'prop-types';

const ErrorAlert = ({ message }) => {
	return (
		<div className="py-2 px-4 bg-red-800 border-red-900 text-gray-200 rounded-lg">
			<p>{message}</p>
		</div>
	);
};

ErrorAlert.propTypes = {
	message: PropTypes.string.isRequired,
};

export default ErrorAlert;
