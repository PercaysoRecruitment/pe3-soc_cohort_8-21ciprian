import React from 'react'

function Main({articles}) {
	return (
		<main>
			{articles?.map(article => (
				<article key={article.url}>
					<h2>{article.title}</h2>
					<p>{article.description}</p>
					<p>
						{article.content.substring(0, 200)}...
						<a href={article.url}>
							<span>Read full article</span>
						</a>
					</p>

					<p>
						Source:{' '}
						<a href={article.source.url} target='_blank' rel='noreferrer'>
							{article.source.name}
						</a>{' '}
					</p>

					<img src={article.image} alt={article.title} />
				</article>
			))}
		</main>
	)
}

export default Main
