import { v4 as uuidv4 } from 'uuid';

const products = [
	{
		id: uuidv4(),
		title: 'idk',
		price: 123,
	},
	{
		id: uuidv4(),
		title: 'idk2',
		price: 234,
	},
	{
		id: uuidv4(),
		title: 'idk3',
		price: 345,
	},
];

export const fetchProducts = () => products;
