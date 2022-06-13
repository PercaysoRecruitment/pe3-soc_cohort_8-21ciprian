import {useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound'
import './App.module.css'

function App() {
	//I used useState hook to keep track of the data that is being fetch from the API, the search query, any errors that might occours as well as the loading stage when the fetch occurs
	// Data that will be displayed on the page initially it is null
	const [data, setData] = useState(null)
	//Search query initially it is an empty string
	const [search, setSearch] = useState('')
	//State to manage any errors that might occour whit the type of input the user will type
	const [error, setError] = useState(null)
	//Loading stage when the fetch occours
	const [loading, setLoading] = useState(false)

	//with useEffect I am fetching the data from the API when page loads
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
	console.log('data: ', data)
	return (
		<section data-testid='appTestId' className='app'>
			{/* Passing props to Header to keep track of the state */}
			<Header
				search={search}
				setSearch={setSearch}
				setData={setData}
				setError={setError}
				setLoading={setLoading}
			/>
			{/* If there is an error , display the error */}

			{error && <p>{error}</p>}
			{/* While the data is being fetch , display loading... */}
			{/* If the data is fetched , Render Main component and pass the data as props */}
			{/* If the query doesn't return data , render NotFound component */}

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
