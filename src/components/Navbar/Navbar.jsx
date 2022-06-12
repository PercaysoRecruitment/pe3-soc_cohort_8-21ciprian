import {useEffect, useState} from 'react'
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
	const [query, setQuery] = useState('')
	useEffect(() => {
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
		fetchTopics(query)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query])

	return (
		<nav className={styles.navbar}>
			<select
				className={styles.select}
				value={query}
				onChange={e => setQuery(e.target.value)}>
				<option value=''>Topics</option>{' '}
				{topics.map(topic => (
					<option key={topic} value={topic} className={styles.navListItem}>
						{topic}
					</option>
				))}
			</select>
			<ul className={styles.navList}>
				{topics.map(topic => (
					<li
						key={topic}
						onClick={() => setQuery(topic)}
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
