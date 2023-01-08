import Link from "next/link"
import { KeyboardEvent, useEffect, useState } from "react"

const Header = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const checkIfTop = () => window.scrollY <= 0
    window.addEventListener("scroll", () => {
      setIsTop(checkIfTop())
    })
  })

  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleKeyUp = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter") {
      setMenuOpen(!isMenuOpen)
    }
  }

  return (
    <header>
      <nav
        className={
          "fixed top-0 left-0 w-full py-1 flex flex-wrap z-50 " +
          (isTop ? "bg-transparent" : "bg-white shadow shadow-gray-300")
        }
        role="navigation"
        aria-label="main navigation"
      >
        <Link className="flex items-center p-2" href="/">
          <span className="text-primary font-bold text-xl secondary-font">TIMO</span>
        </Link>
        <div className="flex md:order-2">

          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div className={"items-center justify-between w-full rounded-2xl border-2 border-primary border-solid md:border-none md:bg-inherit md:flex md:w-auto md:order-1 " + (isMenuOpen ? "flex" : "hidden")} id="navbar-sticky">
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link className="flex items-center p-2 hover:text-blue-800" href="/about">
                Über mich
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
