import ArticlesStyles from '../styles/Articles.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({articles}) => {
    return (
        <div className={ArticlesStyles.grid}>
            {articles.map((article) =>(
                <ArticleItem key={article.id} article={article}/>
            ))}
        </div>
    )
}
export default ArticleList