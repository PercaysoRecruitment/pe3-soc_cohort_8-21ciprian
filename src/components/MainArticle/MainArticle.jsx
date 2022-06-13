import styles from './MainArticle.module.css'

function MainArticle({article}) {
	//created variable to display date and time of the article from the fetched data
	const published = article?.publishedAt?.split(/T/)
	const date = published?.[0] || 'n/a'
	const time = published?.[1].slice(0, -1) || 'n/a'

	return (
		<article data-testid='maTestId' className={styles.mainArticle}>
			<div className={styles.imgContainer}>
				<img
					data-testid='imgTestId'
					src={article?.image}
					alt={article?.title}
					className={styles.mainImg}
				/>
			</div>
			<section className={styles.mainDesc}>
				<h2 data-testid='titleTestId' className={styles.mainDescTitle}>
					{article?.title}
				</h2>
				<p data-testid='descTestId' className={styles.mainDescContent}>
					{article?.content?.substring(0, article?.content?.length - 15)}...{' '}
					<a href={article?.url} target='_blank' rel='noreferrer'>
						<span className={styles.fullArticleLink}>Read full article</span>
					</a>
				</p>

				<p data-testid='srcTestId' className={styles.articleSource}>
					<span className={styles.source}>
						<a href={article?.source?.url} target='_blank' rel='noreferrer'>
							{article?.source?.name}
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
