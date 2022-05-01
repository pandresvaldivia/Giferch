import { shallow } from 'enzyme';

import SearchCategory from '../../components/SearchCategory';

describe('These are the tests for the SearchCategory component', () => {
	const setCategory = jest.fn();

	let wrapper = shallow(
		<SearchCategory category="test" setCategory={setCategory} />
	);

	beforeEach(() => {
		wrapper = shallow(
			<SearchCategory category="test" setCategory={setCategory} />
		);
	});

	test('Should return the SearchCategory component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Should change the value of the input', () => {
		const input = wrapper.find('input');
		const value = 'Hola mundo';

		input.simulate('change', { target: { value } });

		const inputAfterChange = wrapper.find('input');

		expect(inputAfterChange.prop('value')).toBe(value);
	});

	test('Should not call the setCategory function', () => {
		const form = wrapper.find('form');

		form.simulate('submit', { preventDefault() {} });

		expect(setCategory).not.toHaveBeenCalled();
	});

	test('Should run the setCategory function and clean the input', () => {
		const input = wrapper.find('input');

		input.simulate('change', { target: { value: 'Rick and Morty' } });

		const form = wrapper.find('form');

		form.simulate('submit', { preventDefault() {} });

		expect.assertions(3);

		expect(setCategory).toHaveBeenCalled();
		expect(setCategory).toHaveBeenCalledWith(expect.any(String));
		expect(input.prop('value')).toBe('');
	});
});
