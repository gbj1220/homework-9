import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../db-mock/dbMock';
import { logInActionCreator } from '../actions/actions';
import { Link } from 'react-router-dom';

const authUser = (users, username, password) => {
	const matchingUser = users.find((user) => {
		return user.username === username && user.password === password
			? true
			: false;
	});

	return matchingUser ? matchingUser : undefined;
};

export default function SignIn() {
	const dispatch = useDispatch();
	const users = fetchUsers();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleOnSubmit = () => {
		const authorizedUser = authUser(users, username, password);
		console.log(`======authUser======`);
		console.log(authorizedUser);

		if (authorizedUser) {
			logInActionCreator(authorizedUser);
			dispatch(logInActionCreator(authorizedUser));
			console.log(authorizedUser);
		} else {
			setError('Wrong username or password');
		}
	};

	return (
		<div>
			<input
				type='text'
				placeholder='username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type='password'
				placeholder='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<Link to='/home'>
				<button onClick={handleOnSubmit}>Submit</button>
			</Link>
			{error && <p>{error}</p>}
		</div>
	);
}
