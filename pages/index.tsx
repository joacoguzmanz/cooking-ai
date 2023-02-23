import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cooking with AI</title>
        <meta name="AI helps you to cook" content="App that suggest you what to cook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center h-screen'>
        <h1 className='text-red-300'>Hello World</h1>
      </main>
    </>
  )
}
