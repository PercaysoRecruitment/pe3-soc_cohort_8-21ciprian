import React from 'react'
import styles from './MainArticle.module.css'

function MainArticle({article}) {
	return (
		<article className={styles.mainArticle}>
			<img src={article.image} alt={article.title} />
			<h2>{article.title}</h2>
			<p>{article.description}</p>
			<p>
				{article.content.substring(0, 200)}...
				<a href={article.url} target='_blank' rel='noreferrer'>
					<span>Read full article</span>
				</a>
			</p>

			<p>
				Source:{' '}
				<a href={article.source.url} target='_blank' rel='noreferrer'>
					{article.source.name}
				</a>{' '}
			</p>
		</article>
	)
}

export default MainArticle
