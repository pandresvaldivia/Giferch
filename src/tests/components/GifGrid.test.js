import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../hooks/useFetchGifs');

describe('These are the test for the GifGrid component', () => {
	const category = 'Rick and Morty';

	test('Should return the initial state of the GifGrid component', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should return the GifGrid component with results using useFetchGifs', () => {
		const gifs = [
			{
				id: 123,
				title: 'Mock title',
				image: 'https://localhost:3000/images/mock.gif',
				url: 'https://localhost:3000/images/mock',
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		const spinner = wrapper.find('Spinner');
		const gifCardsAmount = wrapper.find('GifCard').length;

		expect(spinner.exists()).toBe(false);
		expect(gifCardsAmount).toBe(gifs.length);
	});

	test('Should render an error component', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		const error = wrapper.find('ErrorAlert');
		const spinner = wrapper.find('Spinner');
		const gifCardsAmount = wrapper.find('GifCard').length;

		expect(error.exists()).toBe(true);
		expect(spinner.exists()).toBe(false);
		expect(gifCardsAmount).toBe(0);
	});
});
