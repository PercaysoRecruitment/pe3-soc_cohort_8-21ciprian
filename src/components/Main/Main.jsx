import React from 'react'
import MainArticle from '../MainArticle/MainArticle'
import SecondaryArticle from '../SecondaryArticle/SecondaryArticle'
import styles from './Main.module.css'

function Main({articles}) {
	console.log('all articles: ', articles)
	return (
		<main className={styles.main}>
			<MainArticle article={articles?.[0]} />
			<hr />
			{articles?.slice(1).map(article => (
				<SecondaryArticle article={article} key={article.url} />
			))}
		</main>
	)
}

export default Main
