import MainArticle from '../MainArticle/MainArticle'
import SecondaryArticle from '../SecondaryArticle/SecondaryArticle'
import styles from './Main.module.css'

function Main({articles}) {
	return (
		<main className={styles.main}>
			<MainArticle article={articles?.[0]} />
			<hr />
			<section className={styles.secondarySection}>
				{articles?.slice(1).map(article => (
					<SecondaryArticle article={article} key={article.url} />
				))}
			</section>
		</main>
	)
}

export default Main
