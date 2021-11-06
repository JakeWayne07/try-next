import Head from 'next/head' //? When you want to use custom titles, metatags, keywords etc

export default function Home({articles}) {

  return (
    <div>
      <Head>
        <title>Welcome to the Future</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>The Homepage</h1>
      <h2>Components</h2>
    </div>
  )
}

//? Get Static Props -> Fetch Data at Build Time
//? Get Server Side Props -> Fetch Data on every Request -> slower
//? Get Static Paths Props -> Dynamically generate paths based on the data being fetched

export const getStaticProps = async () =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)

  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}
