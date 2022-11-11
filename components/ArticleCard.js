import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'
export default function ArticleCard({article}){
    return (
        <Link  href='/article/[id]' as={`/article/${article.id}`}>
            <div className={articleStyles.card}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </div>
        </Link>
    )
}