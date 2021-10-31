import Head from 'next/head' //? When you want to use custom titles, metatags, keywords etc

export default function Home() {
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
