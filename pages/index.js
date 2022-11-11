import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'
import { useQuery } from 'react-query'

export default function Home() {
  const fetchPosts = async () => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    return res.json()
  }

  const {data, status} = useQuery("posts", fetchPosts)
  if (status === 'loading'){
      <div>Loading...</div>
  }

  if (status === 'error'){
      <div>ERROR!</div>
  }

  if (status === 'success'){
    console.log(data)
  }

  return (
    <div>
      <Meta title="Home"/>
      <h1 className='text-center'>Welcome to CR7 World!!!</h1>
      <ArticleList articles={data}/>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
