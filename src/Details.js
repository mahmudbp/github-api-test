import React, { useState } from 'react';
import { Octokit } from 'octokit';
import { parse } from 'marked';

const getReadMe = (url, setReadme) => {
	const octokit = new Octokit({});

	return octokit.request(`get ${url}/readme`).then(({ data }) => {
		setReadme(parse(atob(data.content)));
	});
};

const Details = ({ item }) => {
	const [readme, setReadme] = useState();

	return (
		<>
			<tr>
				<td className='border'>
					<a
						className='text-green-700 hover:underline hover:text-green-500 active:text-blue-900'
						href={item.html_url}
						target='_blank'
						rel='noreferrer'
					>
						{item.name}
					</a>
				</td>
				<td className='border'>{item.owner.login}</td>
				<td className='border'>{item.forks}</td>
				<td className='border'>{item.watchers}</td>
				<td className='border'>{item.stargazers_count}</td>
				<td className='border'>{item.open_issues_count}</td>
				<td>
					<button
						className='text-green-700 hover:underline hover:text-green-500 active:text-blue-900'
						onClick={() =>
							readme
								? setReadme()
								: getReadMe(item.url, setReadme)
						}
					>
						{readme ? 'hide README' : 'show README'}
					</button>
				</td>
			</tr>
			{readme && (
				<tr>
					<td
						colspan='7'
						dangerouslySetInnerHTML={{
							__html: readme,
						}}
					></td>
				</tr>
			)}
		</>
	);
};

export default Details;
