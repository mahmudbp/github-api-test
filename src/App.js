import React, { useState } from 'react';
import { Octokit } from 'octokit';
import Details from './Details';

const makeCall = ({ search, setResult }) => {
	const octokit = new Octokit({});

	return octokit
		.request(`GET /search/repositories?q=${search}`)
		.then(({ data }) => setResult(data.items));
};

const App = () => {
	const [search, setSearch] = useState();
	const [result, setResult] = useState();

	console.log('result', result);

	const handleSubmit = () => {
		makeCall({ search, setResult });
	};

	return (
		<div>
			github access
			<div>
				<input
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' && search) handleSubmit(e);
					}}
				/>
				<button disabled={!search} onClick={handleSubmit}>
					search
				</button>
			</div>
			<div>
				{result &&
					result.map((item) => <Details key={item.id} item={item} />)}
			</div>
		</div>
	);
};

export default App;
