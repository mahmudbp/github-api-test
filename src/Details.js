import { useState } from 'react';

const Details = ({ item }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<>
			<td>
				<a
					className='text-green-700 hover:underline hover:text-green-500 active:text-blue-900'
					href={item.html_url}
					target='_blank'
					rel='noreferrer'
				>
					{item.name}
				</a>
			</td>
			<td>{item.owner.login}</td>
			<td>{item.forks}</td>
			<td>{item.watchers}</td>
			<td>{item.stargazers_count}</td>
			<td>{item.open_issues_count}</td>
			<td>open README</td>
			{/* <button onClick={() => setExpanded(!expanded)}>
				{expanded ? 'Less details' : 'More details'}
			</button> */}
			{/* {expanded && (
				<div className='flex space-x-6'>
					<div>{item.forks}</div>
					<div>{item.watchers}</div>
					<div>{item.stargazers_count}</div>
					<div>{item.open_issues_count}</div>
				</div>
			)} */}
		</>
	);
};

export default Details;
