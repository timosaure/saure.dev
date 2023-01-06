
import Footer from "./footer"
import Header from "./header"

const Layout = (props: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
