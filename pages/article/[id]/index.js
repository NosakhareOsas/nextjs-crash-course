import { useRouter } from "next/router"
import Link from "next/link"
import Meta from "../../../components/Meta"
import { useQuery } from "react-query"


export default function article(){
    //option 1
    // const router = useRouter()
    // const {id} = router.query
    
    //use useeffect to query api with the given id
    const fetchPhoto = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/1`)
        return res.json()
    }
    const {data, status} = useQuery("photo", fetchPhoto)
    if (status === 'loading'){
        <div>Loading...</div>
    }

    if (status === 'error'){
        <div>ERROR!</div>
    }

    if (status === 'success'){
        <div>data!</div>
    }
    return(
        <div className="items-center justify-center">
            
            <Meta />
            <h1 className='text-4xl font-bold text-center mt-10 mb-5 ml-[10%] mr-[20%]'>{}</h1>
            <p className="text-center ml-[10%] mr-[20%]">{}</p>
            <br/>
            <Link href='/'><p className="text-center">Go Back</p> </Link>
        </div>
    )
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

