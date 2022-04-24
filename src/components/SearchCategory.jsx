import PropTypes from 'prop-types';
import { useState } from 'react';
import { validateForm } from '../helpers/validateForm';
import ErrorAlert from './ErrorAlert';

const SearchCategory = ({ category, setCategory }) => {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateForm(inputValue, setError)) return;

		setCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<section
			aria-label="Search category"
			className="flex flex-col-reverse md:flex-row gap-6 md:gap-0 justify-between items-center mb-6"
		>
			<h2 className="uppercase text-2xl font-bold">
				Results of <span className="text-cyan-400">{category}</span>:
			</h2>
			{error && <ErrorAlert message={error} />}
			<form className="flex w-full md:w-auto" onSubmit={handleSubmit}>
				<input
					className="outline-none border-2 bg-neutral-900 border-neutral-700 border-r-0 focus:bg-neutral-700 p-1.5 rounded-tl-md rounded-bl-md flex-1"
					type="text"
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button
					className="bg-cyan-500 hover:bg-cyan-600 transition-colors px-1.5 font-semibold rounded-tr-md rounded-br-md"
					type="submit"
				>
					Search
				</button>
			</form>
		</section>
	);
};

SearchCategory.propTypes = {
	category: PropTypes.string.isRequired,
	setCategory: PropTypes.func.isRequired,
};

export default SearchCategory;
