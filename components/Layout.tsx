import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

type ChildrenProps = {
    children: React.ReactNode
}

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className='min-h-screen flex flex-col'>
        <Head>
            <title>Cooking with AI</title>
            <meta name="AI helps you to cook" content="App that suggest you what to cook" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className='px-5'>
            {children}
        </main>
        <Footer />
    </div>
  );
}