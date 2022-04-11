import {useEffect, useState} from "react";

const ArticleContent = () => {
    const [articleDataset, setArticleDataset] = useState({});

    const effectCallback = () => {
        (async () => {
            const result = await fetch(`/api/articles`);
            const body = await result.json();

            console.log(body);

            setArticleDataset(body);
        })();
    };

    useEffect(effectCallback, []);

    return articleDataset;
}

export default ArticleContent;