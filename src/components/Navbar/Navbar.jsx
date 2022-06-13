import {useEffect, useState} from 'react'
import styles from './Navbar.module.css'

function Navbar({setData, setLoading, setError}) {
	//Created a list with the topics and mapped over it to create topics list and options in the navbar
	const topics = [
		'Business',
		'Technology',
		'Entertainment',
		'Sports',
		'Science',
		'Health',
	]
	// added a state ti keep track of the topics query
	const [query, setQuery] = useState('')
	//using useEffect I am fetching the data when the topic matches the topic options
	useEffect(() => {
		async function fetchTopics(topic) {
			setLoading(true)

			try {
				const response = await fetch(
					`${
						process.env.REACT_APP_BASE_URL
					}/top-headlines?topic=${topic.toLowerCase()}&token=${
						process.env.REACT_APP_API_TOKEN
					}&lang=en&max=5`
				)
				const fetchedData = await response.json()
				setData(fetchedData)
			} catch (err) {
				setError(err)
			}
			setLoading(true)
		}
		// fetchTopics(query)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query])

	return (
		<nav data-testid='navTestId' className={styles.navbar}>
			{/* update the query state when a topic option is clicked */}

			<select
				data-testid='selectTestId'
				className={styles.select}
				value={query}
				onChange={e => setQuery(e.target.value)}>
				<option value=''>Topics</option>{' '}
				{topics.map((topic, i) => (
					<option
						data-testid={`opTestId-${i}`}
						key={topic}
						value={topic}
						className={styles.navListItem}>
						{topic}
					</option>
				))}
			</select>
			<ul className={styles.navList}>
				{topics.map((topic, i) => (
					<li
						data-testid={`liTestId-${i}`}
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
