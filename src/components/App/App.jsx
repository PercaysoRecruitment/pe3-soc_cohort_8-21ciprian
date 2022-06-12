import {useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound'
import './App.module.css'

function App() {
	const [data, setData] = useState(null)
	const [search, setSearch] = useState('')
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/top-headlines?&token=${process.env.REACT_APP_API_TOKEN}&lang=en&max=7`
			)
			const resData = await response.json()
			setData(resData)
		}
		// fetchData()
	}, [])

	return (
		<section className='app'>
			<Header
				search={search}
				setSearch={setSearch}
				setData={setData}
				setError={setError}
				setLoading={setLoading}
			/>
			{error && <p>{error}</p>}

			{loading ? (
				<p>Loading...</p>
			) : data?.articles?.length ? (
				<Main articles={data.articles} />
			) : (
				<NotFound />
			)}
			<Footer />
		</section>
	)
}

export default App
