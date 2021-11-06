import { useRouter } from "next/dist/client/router"
import Link from "next/link"

const Article = ({article}) => {
    //* Using the old method
    // const router = useRouter()
    // const {id} = router.query
    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props:{
            article
        }
    }
}

export const getStaticPaths = async () =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)

    const paths = ids.map((id) => ({
        params: {
            id: id.toString()
        }
    }))

    return{
        paths,
        //* incase an article /  article id doesn't exist, show a 404
        fallback: false
    }
}

export default Article
