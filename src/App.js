import React, { useState } from 'react';
import { Octokit } from 'octokit';
import Details from './Details';

const sortMethod = (items, sort) => {
	const newArr = [...items];
	switch (sort) {
		case 'name_desc':
			return newArr.sort((a, b) => b.name.localeCompare(a.name));
		case 'author_asc':
			return newArr.sort((a, b) =>
				a.owner.login.localeCompare(b.owner.login)
			);
		case 'author_desc':
			return newArr.sort((a, b) =>
				b.owner.login.localeCompare(a.owner.login)
			);
		case 'forks_asc':
			return newArr.sort((a, b) => a.forks - b.forks);
		case 'forks_desc':
			return newArr.sort((a, b) => b.forks - a.forks);
		case 'watchers_asc':
			return newArr.sort((a, b) => a.watchers - b.watchers);
		case 'watchers_desc':
			return newArr.sort((a, b) => b.watchers - a.watchers);
		case 'stars_asc':
			return newArr.sort(
				(a, b) => a.stargazers_count - b.stargazers_count
			);
		case 'stars_desc':
			return newArr.sort(
				(a, b) => b.stargazers_count - a.stargazers_count
			);
		case 'open_issues_asc':
			return newArr.sort((a, b) => a.open_issues - b.open_issues);
		case 'open_issues_desc':
			return newArr.sort((a, b) => b.open_issues - a.open_issues);
		default:
			return newArr.sort((a, b) => a.name.localeCompare(b.name));
	}
};

const makeCall = ({ search, setResult, setLoading }) => {
	const octokit = new Octokit({});

	return octokit
		.request(`GET /search/repositories?q=${search}`)
		.then(({ data }) => {
			setResult(sortMethod(data.items, 'name_asc'));
			setLoading(false);
		});
};

const App = () => {
	const [search, setSearch] = useState();
	const [result, setResult] = useState();
	const [loading, setLoading] = useState(false);

	console.log('result', result);

	const handleSubmit = () => {
		setLoading(true);
		makeCall({ search, setResult, setLoading });
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
				<button
					className='px-1 h-[34px] border-2 border-blue-800 rounded hover:text-white hover:bg-blue-800 disabled:border-gray-300 disabled:bg-white disabled:text-stone-300'
					disabled={!search || loading}
					onClick={handleSubmit}
				>
					search
				</button>
				<select
					className='px-1 h-[34px] border border-blue-800 rounded'
					onChange={(e) =>
						setResult(sortMethod(result, e.target.value))
					}
				>
					<option value='name_asc'>Name ASC</option>
					<option value='name_desc'>Name DESC</option>
					<option value='author_asc'>Author ASC</option>
					<option value='author_desc'>Author DESC</option>
					<option value='forks_asc'>Forks ASC</option>
					<option value='forks_desc'>Forks DESC</option>
					<option value='watchers_asc'>Watchers ASC</option>
					<option value='watchers_desc'>Watchers DESC</option>
					<option value='stars_asc'>Stars ASC</option>
					<option value='stars_desc'>Stars DESC</option>
					<option value='open_issues_asc'>Open Issues ASC</option>
					<option value='open_issues_desc'>Open Issues DESC</option>
				</select>
			</div>
			<div>
				{loading && <p className='animate-pulse'>loading...</p>}
				{result && !loading && (
					<table className='w-full'>
						<thead>
							<tr>
								<th className='border'>Name</th>
								<th className='border'>Author</th>
								<th className='border'>forks</th>
								<th className='border'>watchers</th>
								<th className='border'>stars</th>
								<th className='border'>open issues</th>
							</tr>
						</thead>
						{result.map((item) => (
							<tbody key={item.id}>
								<tr>
									<Details item={item} />
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
