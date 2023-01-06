import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import typingBackgrond from '../public/typing_background.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className="h-screen bg-transparent hero is-fullheight is-transparent">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="text-center text-white secondary-font">
            <h1 className="uppercase text-7xl font-bold mb-6">Timo Saure</h1>
            <h2 className="text-4xl font-medium mb-2">Full Stack Developer</h2>
            <h2 className="text-4xl font-medium mb-2">Software Ingenieur</h2>
            <h2 className="text-4xl font-medium mb-2">Data Engineer</h2>
          </div>
        </div>
        <a href="#main" className="absolute bottom-3 left-0 w-full text-center text-white text-5xl cursor-pointer">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src={typingBackgrond}
            alt="Background with hands typing on keyboard"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
      </section>
    </>
  )
}
