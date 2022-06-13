import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'

function Header({search, setSearch, setData, setError, setLoading}) {
	// Created a function to fetch the data when the query it is changed or the topic options aer being clicked
	async function fetchData() {
		// Set loading to true until data it is fetched
		setLoading(true)
		// Used try catch block to catch any errors that might occour and that could breack the app
		try {
			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/search?q=${search}&token=${process.env.REACT_APP_API_TOKEN}&lang=en&max=7`
			)
			const fetchedData = await response.json()
			//UIpdate th e data with the fetched data in json format
			setData(fetchedData)
		} catch (err) {
			//if there is an error the error state will be updated and displayed on the page
			setError(err)
		}
		// if the fetch was resolved I update the loading to false(stipping the loading phase)
		setLoading(false)
	}
	//created a function to handle input erors
	async function handleInputError(string) {
		// if the input field is empty and the function is called, it will update the error state

		if (!string.trim().length) {
			setError('Input field cannot be empty')
			//if the input does not contains letters, the error state will be updated
		} else if (!/[a-z]/gi.test(string)) {
			setError('Your query needs to contain a letter')
		} else {
			// await fetchData()
		}
	}
	//function for fetching data when search button is clicked
	async function handleClick() {
		await handleInputError(search)
		setSearch('')
	}
	//function for fetching data when enter key is pressed

	async function handleEnterKey(e) {
		if (e.key === 'Enter') {
			await handleInputError(search)
			setSearch('')
		}
	}
	//function for hiding error message

	function hideError() {
		setError(null)
	}
	return (
		<header data-testid='headerTestId' className={styles.header}>
			<div className={styles.headerTop}>
				<p className={styles.logo}>PE3News</p>{' '}
				<div className={styles.inputContainer}>
					{/* update the search state when user types in the input field */}
					{/* fetch data when enter key is pressed */}
					{/* hide error when user clicks or focuses on input */}

					<input
						className={styles.input}
						type='text'
						placeholder='Search..'
						value={search}
						onChange={e => setSearch(e.target.value)}
						onKeyPress={handleEnterKey}
						onFocus={hideError}
						onClick={hideError}
					/>
					{/* fetch data when button is clicked */}

					<button className={styles.inputButton} onClick={handleClick}>
						Search
					</button>
				</div>
			</div>
			{/* pass data to navbar so it can update the state when user clicks on topic options */}

			<Navbar setData={setData} setLoading={setLoading} setError={setError} />
		</header>
	)
}

export default Header
