
import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

const Layout = (props: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Timo Saure</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />

        {/* // SEO tags */}
        <meta name="description" content="Timo Saure - Software Ingenieur am Bodensee. Hier finden Sie alle Infos zu mir und meiner Arbeit!" />
        <meta name="og:title" property="og:title" content="Timo Saure - Software Ingenieur am Bodensee" />
        <meta name="og:description" property="og:title" content="Hier finden Sie alle Infos zu mir und meiner Arbeit!" />
        <meta name="og:type" property="og:type" content="website" />
      </Head>
      <Header />
      <main className="grow flex flex-col">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
