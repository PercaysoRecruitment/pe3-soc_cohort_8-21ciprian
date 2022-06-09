import React from 'react'

function Navbar({setData}) {
	const topics = [
		'Business',
		'Technology',
		'Entertainment',
		'Sports',
		'Science',
		'Health',
	]
	async function handleTopics(topic) {
		const response = await fetch(
			`${
				process.env.REACT_APP_BASE_URL
			}/top-headlines?topic=${topic.toLowerCase()}&token=${
				process.env.REACT_APP_API_TOKEN
			}&lang=en&max=5`
		)
		const fetchedData = await response.json()
		setData(fetchedData)
	}
	async function handleHeader(e) {
		await handleTopics(e)
	}
	return (
		<nav>
			<ul>
				{topics.map(topic => (
					<li key={topic} onClick={() => handleHeader(topic)} value={topic}>
						{topic}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
