import { shallow } from 'enzyme';

import GifCard from '../../components/GifCard';

describe('These are the tests for the GifCard component', () => {
	const title = 'Title';
	const url = 'http://localhost:3000/';
	const image = 'http://localhost:3000/image.jpg';

	let wrapper = shallow(<GifCard title={title} url={url} image={image} />);

	test('Should render the component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render the component correctly with a title', () => {
		const cardTitle = wrapper.find('figcaption').text();

		expect(cardTitle).toBe(title);
	});

	test('Should render the component correctly with an image url', () => {
		const cardImage = wrapper.find('img').prop('src');

		expect(cardImage).toBe(image);
	});

	test('Should render the component with the gif-card class', () => {
		const cardClass = wrapper.prop('className').includes('gif-card');

		expect(cardClass).toBe(true);
	});
});
