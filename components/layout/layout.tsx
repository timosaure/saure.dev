
import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

const Layout = (props: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>Timo Saure</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="flex flex-col">
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
