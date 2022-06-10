import styles from './SecondaryArticle.module.css'

function SecondaryArticle({article}) {
	const published = article.publishedAt.split(/T/)
	const date = published[0]
	const time = published[1].slice(0, -1)
	return (
		<>
			<a href={article.url} target='_blank' rel='noreferrer'>
				<article className={styles.secondary}>
					<img
						src={article.image}
						alt={article.title}
						className={styles.secondaryImg}
					/>
					<section className={styles.secondaryDesc}>
						<h2 className={styles.secondaryDescTitle}>{article.title}</h2>
						<p className={styles.secondaryDescContent}>
							{article.content.substring(0, 150)}...{' '}
							<span className={styles.fullArticleLink}>Read full article</span>
						</p>

						<p className={styles.articleSource}>
							<span className={styles.source}>{article.source.name}</span>{' '}
							<span className={styles.source}>{date}</span>{' '}
							<span className={styles.source}>{time}</span>
						</p>
					</section>
				</article>
			</a>
			<hr />
		</>
	)
}

export default SecondaryArticle
