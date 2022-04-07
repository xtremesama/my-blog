import React from 'react';
import articlesContent from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticlesListPage = () => (
    <React.Fragment>
        <h1>Articles</h1>
        <ArticlesList articles={articlesContent} />
    </React.Fragment>
);

export default ArticlesListPage;