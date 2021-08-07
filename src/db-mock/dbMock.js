import { v4 as uuidv4 } from 'uuid';

const products = [
	{
		id: uuidv4(),
		title: 'Basketball',
		price: 12.99,
	},
	{
		id: uuidv4(),
		title: 'Baseball',
		price: 4.99,
	},
	{
		id: uuidv4(),
		title: 'Mango',
		price: 1.99,
	},
];

const users = [
	{
		id: uuidv4(),
		username: '1',
		email: '1@1.com',
		password: '1234',
	},
];

export const fetchProducts = () => products;

export const fetchUsers = () => users;
