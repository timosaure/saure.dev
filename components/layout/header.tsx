import { IconDefinition, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

export default function Header() {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const checkIfTop = () => window.scrollY <= 0
    const onScroll = () => {
      setIsTop(checkIfTop())
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav
        className={"fixed top-0 left-0 w-full py-1 md:h-12 flex flex-wrap z-50 " +
          (isTop ? "bg-transparent" : "bg-white shadow shadow-gray-300")}
        role="navigation"
        aria-label="main navigation"
      >
        <a className="flex items-center px-2" href="/#home">
          <span className="text-primary font-bold text-xl secondary-font">TIMO</span>
        </a>
        <div className="flex flex-grow justify-end  md:hidden">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-600 rounded-lg hover:text-gray-900" onClick={() => setMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div className={"flex-col space-y-4 md:space-y-0 items-stretch justify-between w-full bg-white md:border-none md:bg-inherit md:flex-grow md:flex md:flex-row md:w-auto md:order-1 " + (isMenuOpen ? "flex" : "hidden")} id="navbar-sticky">
          <ul className="flex flex-col items-stretch space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-4 pt-4 md:pt-0">
            <li className="">
              <a className="pl-6 py-3 md:py-0 hover:bg-gray-100 md:hover:bg-inherit flex items-center hover:text-blue-800" href="/#about">
                Über mich
              </a>
            </li>
            <li>
              <a className="pl-6 py-3 md:py-0 hover:bg-gray-100 md:hover:bg-inherit flex items-center hover:text-blue-800" href="/#contact">
                Kontakt
              </a>
            </li>
          </ul>
          <ul className="flex flex-col items-stretch space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-2 pb-4 pr-0 md:pb-0 md:pr-6">
            <li><HeaderSocialLink icon={faGithub} href="https://github.com/timosaure" /></li>
            <li><HeaderSocialLink icon={faLinkedinIn} href="https://www.linkedin.com/in/timosaure" /></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

function HeaderSocialLink(props: { icon: IconDefinition; href: string }) {
  return (
    <a className="pl-6 py-3 md:py-0 hover:bg-gray-100 md:hover:bg-inherit cursor-pointer text-2xl flex items-center text-primary" href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  )
}
