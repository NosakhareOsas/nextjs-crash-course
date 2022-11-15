import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'
import useFetch from '../customHooks/useFetch'
import { dehydrate, QueryClient, useQuery } from 'react-query';

export default function Home() {
  const { data, status, error } = useQuery(['posts'], ()=>useFetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`))

  if (status === 'loading'){
      return <div>Loading...</div>
  }

  if (status === 'error'){
      return <div>ERROR!</div>
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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['posts'], () => useFetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`))
  return {
      props: {dehydratedState: dehydrate(queryClient),}
  }
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
