import Navbar from '../Navbar/Navbar'
function Header({search, setSearch, setData, setError, setLoading}) {
	async function fetchData() {
		setLoading(true)
		try {
			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/search?q=${search}&token=${process.env.REACT_APP_API_TOKEN}&lang=en&max=5`
			)
			const fetchedData = await response.json()
			setData(fetchedData)
		} catch (err) {
			setError(err)
		}
		setLoading(false)
	}
	async function handleInputError(string) {
		if (!string.trim().length) {
			setError('Input field cannot be empty')
		} else if (!/[a-z]/gi.test(string)) {
			setError('Your query needs to contain a letter')
		} else {
			await fetchData()
		}
	}
	async function handleClick() {
		await handleInputError(search)
		setSearch('')
	}
	async function handleEnterKey(e) {
		if (e.key === 'Enter') {
			await handleInputError(search)
			setSearch('')
		}
	}
	function hideError() {
		setError(null)
	}
	return (
		<header>
			<div>
				<p>PE3News</p>{' '}
				<input
					type='text'
					placeholder='Search..'
					value={search}
					onChange={e => setSearch(e.target.value)}
					onKeyPress={handleEnterKey}
					onFocus={hideError}
					onClick={hideError}
				/>
				<button onClick={handleClick}>Search</button>
			</div>
			<Navbar setData={setData} />
		</header>
	)
}

export default Header
