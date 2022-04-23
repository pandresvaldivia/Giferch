import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchCategory = ({ category, setCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setCategory(inputValue);
	};

	return (
		<section
			aria-label="Search category"
			className="flex justify-between items-center mb-6"
		>
			<h2 className="uppercase text-2xl font-bold">
				Results of <span className="text-cyan-400">{category}</span>:
			</h2>
			<form className="flex" onSubmit={handleSubmit}>
				<input
					className="outline-none border-2 bg-neutral-900 border-neutral-700 border-r-0 focus:bg-neutral-700 p-1.5 rounded-tl-md rounded-bl-md"
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
