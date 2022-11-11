import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

export function truncate (string = '', limit = 0) {
    if (string.length > 13) {
        return `${string.substring(0, limit)}...`
    } else{
        return string
    }
}

export default function ArticleCard({article}){
    const {title, body} = article
    return (
        <Link  href='/article/[id]' as={`/article/${article.id}`}>
            <div className={articleStyles.card}>
                <h3 className='font-bold'>{truncate(title, 12)}</h3>
                <p>{truncate(body, 60)}</p>
            </div>
        </Link>
    )
}