import ArticleStyles from '../styles/Articles.module.css'

const ArticleItem = ({article}) => {
    return (
        <div className={ArticleStyles.card}>
            <h2>{article.title}</h2>
            <p>{article.title}</p>
        </div>
    )
}

export default ArticleItem
