import React from "react";
import Article from "./Article";

function ArticleList({articleItems}) {
  //console.log(articles)
  const allArticles = articleItems.map((article) => (
      <Article
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
        minutes={article.minutes}
      />
    ))
  console.log(allArticles);
  return (
  <main>
    {allArticles}
  </main>);
}

export default ArticleList;
