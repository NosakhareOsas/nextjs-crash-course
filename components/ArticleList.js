import articleStyles from '../styles/Article.module.css'
import ArticleCard from './ArticleCard'
export default function ArticleList({articles}){
    return(
        <div className={articleStyles.grid}>
            {articles.map(article => <ArticleCard key={article.id} article={article}/>)}
        </div>
    )
}