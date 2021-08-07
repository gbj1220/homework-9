import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callApiActionCreator } from '../actions/actions';

export default function CatFact() {
	const dispatch = useDispatch();
	const catFactArr = useSelector((state) => state.catFact);
	console.log(`======catFactArr======`);
	console.log(catFactArr);
	const fact = catFactArr.fact;
	console.log(`======fact======`);
	console.log(fact);

	return (
		<div>
			{catFactArr ? <h2>{fact}</h2> : null}
			<button onClick={() => dispatch(callApiActionCreator())}>
				Get Random Cat Fact
			</button>
		</div>
	);
}
