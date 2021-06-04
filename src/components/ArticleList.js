import React from 'react';


function SingleArticle({ article }) {
    return <div>
        <h2>{article.name}</h2>
        
        <p>{article.text}</p>
        <p>{article.publication}</p>
        <a href={article.link}><p>Read the whole Story</p></a>
    </div>
}

export default function ArticleList({ articles }) {
    return (
        <div>
            {articles.map((article) => (
            <SingleArticle key={article.id} article={article} />
            ))}
        </div>
    )
}