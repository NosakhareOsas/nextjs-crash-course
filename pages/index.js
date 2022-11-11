import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Meta title="Home"/>
      <h1>Welcome to CR7 World!!!</h1>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
