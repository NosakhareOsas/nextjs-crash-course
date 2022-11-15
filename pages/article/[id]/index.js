import { useRouter } from "next/router"
import Link from "next/link"
import Meta from "../../../components/Meta"
import { dehydrate, QueryClient, useQuery } from 'react-query';
import Image from 'next/image'
import useFetch from "../../../customHooks/useFetch"

export default function article(){
    //option 1
    const { query } = useRouter()
    const { id } = query
    
    const { data, status, error } = useQuery(['photo', id], ()=>useFetch(`https://jsonplaceholder.typicode.com/photos/${id}`))
    
    if (status === 'loading'){
        return <div>Loading...</div>
    }

    if (status === 'error'){
        return <div>{error.message}</div>
    }
    

    console.log(status)
    

    
    return(
        <div className="items-center justify-center">
            <Meta />
            <h1 className='text-4xl font-bold text-center mt-10 mb-5 ml-[10%] mr-[20%]'>{data.id}</h1>
            <p className="text-center ml-[10%] mr-[20%]">{data.title}</p>
            <br/>
            <Image
                src='https://media.4-paws.org/a/5/3/7/a537f08d227326121b80790ba54036498668c9c8/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.jpg'
                alt="Picture of the author"
                width={400}
                height={400}
            />
            <Link href='/'><p className="text-center">Go Back</p> </Link>   
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['photo', context.params.id], ()=>useFetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`))
    return {
        props: {dehydratedState: dehydrate(queryClient),}
    }
}






//option 2 fetch on request
// export const getServerSideProps = async (context) => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()
//     return {
//         props: {article}
//     }
// }

//option 3
// export const getStaticProps = async (context) => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()
//     return {
//         props: {article}
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }

