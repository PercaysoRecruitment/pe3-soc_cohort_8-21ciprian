import styles from './MainArticle.module.css'

function MainArticle({article}) {
	const published = article.publishedAt.split(/T/)
	const date = published[0]
	const time = published[1].slice(0, -1)

	console.log({article})
	console.log({date})
	console.log({time})
	return (
		<article className={styles.mainArticle}>
			<img src={article.image} alt={article.title} className={styles.mainImg} />
			<section className={styles.mainDesc}>
				<h2 className={styles.mainDescTitle}>{article.title}</h2>
				<p className={styles.mainDescContent}>
					{article.content.substring(0, article.content.length - 15)}...{' '}
					<a href={article.url} target='_blank' rel='noreferrer'>
						<span className={styles.fullArticleLink}>Read full article</span>
					</a>
				</p>

				<p className={styles.articleSource}>
					<span className={styles.source}>
						<a href={article.source.url} target='_blank' rel='noreferrer'>
							{article.source.name}
						</a>
					</span>{' '}
					<span className={styles.source}>{date}</span>{' '}
					<span className={styles.source}>{time}</span>
				</p>
			</section>
		</article>
	)
}

export default MainArticle
