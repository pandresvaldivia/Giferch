export const validateForm = (input, setError) => {
	if (!input.trim()) {
		setError('Please enter a category');

		setTimeout(() => {
			setError('');
		}, 1000);
	}

	return input.trim();
};
