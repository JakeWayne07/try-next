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

export const getServerSideProps = async (context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props:{
            article
        }
    }
}

export default Article
