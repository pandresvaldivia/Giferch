import { shallow } from 'enzyme';

import GifExpertApp from '../components/GifExpertApp';

describe('These are the tests for the GifExpertApp component', () => {
	test('Should return the initial state of the GifExpertApp component', () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});
});
