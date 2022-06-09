import React from 'react'
import styles from './Navbar.module.css'

function Navbar({setData}) {
	const topics = [
		'Business',
		'Technology',
		'Entertainment',
		'Sports',
		'Science',
		'Health',
	]
	async function fetchTopics(topic) {
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
	async function handleHeader(topic) {
		// await fetchTopics(e)
	}
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navList}>
				{topics.map(topic => (
					<li
						key={topic}
						onClick={() => handleHeader(topic)}
						value={topic}
						className={styles.navListItem}>
						{topic}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
