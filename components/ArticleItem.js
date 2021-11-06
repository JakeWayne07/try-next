import Link from 'next/link'
import ArticleStyles from '../styles/Articles.module.css'

const ArticleItem = ({article}) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            {/* 'a' tag is  used since a pass href is required  */}
            <a className={ArticleStyles.card}>
                <h2>{article.title} &rarr;</h2>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
