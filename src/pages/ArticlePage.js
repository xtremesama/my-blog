import React, { useState, useEffect } from 'react';
import ArticlesList from "../components/ArticlesList";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";
import NotFoundPage from "./NotFoundPage";
import ContentSection from "../components/ContentSection"

const ArticlePage = ({ match }) => {
    const name = match.params.name;

    const [articleInfo, setArticleInfo] = useState({ "upvotes": 0, "comments": [] });
    const [articles, setArticles] = useState();

    const articleEffectCallback = () => {
        (async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();

            setArticleInfo(body);
        })();
    };

    const otherArticlesEffectCallback = () => {
        (async () => {
            const result = await fetch(`/api/articles`);
            const body = await result.json();

            setArticles(body);
        })();
    };

    useEffect(articleEffectCallback, [name]);
    useEffect(otherArticlesEffectCallback, [name]);

    if (!articleInfo)
    {
        return <NotFoundPage />;
    }

    return (
        <React.Fragment>
            <h1>{articleInfo.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            <ContentSection contents={articleInfo.content} />
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles:</h3>
            {articles && <ArticlesList articles={articles.filter(article => article.name !== name)} />}
        </React.Fragment>
    );
};

export default ArticlePage;