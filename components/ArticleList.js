import ArticlesStyles from '../styles/Articles.module.css'

const ArticleList = ({articles}) => {
    return (
        <div className={ArticlesStyles.grid}>
            {articles.map((article) =>(
                <h3 key={article.id} >{article.title}</h3>
            ))}
        </div>
    )
}
export default ArticleList