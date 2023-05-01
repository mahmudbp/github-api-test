import { useState } from 'react';

const Details = ({ item }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div>
			<div className='flex space-x-6'>
				<a href={item.html_url} target='_blank' rel='noreferrer'>
					{item.name}
				</a>
				<div>{item.owner.login}</div>
				<button onClick={() => setExpanded(!expanded)}>
					{expanded ? 'Less details' : 'More details'}
				</button>
			</div>
			{expanded && (
				<div className='flex space-x-6'>
					<div>{item.forks}</div>
					<div>likes</div>
					<div>{item.stargazers_count}</div>
					<div>{item.open_issues_count}</div>
				</div>
			)}
		</div>
	);
};

export default Details;
