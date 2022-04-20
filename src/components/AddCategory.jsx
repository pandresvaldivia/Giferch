import { useState } from 'react';

const AddCategory = () => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="flex" onSubmit={handleSubmit}>
			<input
				className="outline-none border-2 bg-neutral-900 border-neutral-700 focus:bg-neutral-700 p-1.5 rounded-tl-md rounded-bl-md"
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
			<button
				className="bg-cyan-900 hover:bg-cyan-800 transition-colors px-1.5 font-semibold rounded-tr-md rounded-br-md"
				type="submit"
			>
				Search
			</button>
		</form>
	);
};

export default AddCategory;
