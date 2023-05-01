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
		<div className='p-8 space-y-4'>
			<h1>Github repository search</h1>
			<div className='space-x-4'>
				<input
					className='px-2 py-1 border border-gray-500 rounded-lg'
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
				{result && (
					<table className='w-full border'>
						<thead>
							<tr className='border'>
								<th>Name</th>
								<th>Author</th>
								<td>forks</td>
								<td>watchers</td>
								<td>stars</td>
								<td>open issues</td>
							</tr>
						</thead>
						{result.map((item) => (
							<tbody>
								<tr className='border'>
									<Details key={item.id} item={item} />
								</tr>
							</tbody>
						))}
					</table>
				)}
			</div>
		</div>
	);
};

export default App;
