import React, {useEffect, useState} from 'react';
import ArticlesList from "../components/ArticlesList";

const ArticlesListPage = () => {
    const [articles, setArticles] = useState();

    const effectCallback = () => {
        (async () => {
            const result = await fetch(`/api/articles`);
            const body = await result.json();

            console.log(body);

            setArticles(body);
        })();
    };

    useEffect(effectCallback, []);

    return (
        <React.Fragment>
            <h1>Articles</h1>
            {articles && <ArticlesList articles={articles} />}
        </React.Fragment>
    )
};

export default ArticlesListPage;