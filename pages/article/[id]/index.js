import { useRouter } from "next/router"
import Link from "next/link"
import Meta from "../../../components/Meta"
export default function article({article}){
    //option 1
    // const router = useRouter()
    // const {id} = router.query
    //use useeffect to query api with the given id
    console.log(article)
    return(
    <>
        <Meta title={article.title}/>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br/>
        <Link href='/'> Go Back</Link>
    </>
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


export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()
    return {
        props: {article}
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

