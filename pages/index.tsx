import { Inter } from '@next/font/google'

import About from "../components/about/about"
import ContactForm from '../components/contact_form/contact_form'
import Home from "../components/home/home"
import Offer from "../components/home/offer"
import { aboutMe } from '../data/about-me'
import { offers } from '../data/offers'


const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Home />
      <Offer id="main" offerItems={offers} />
      <section className="py-12 flex flex-col justify-center items-center">
        <div className="container">
          <div className="text-center text-4xl font-bold mt-6 mb-5">
            <h1 className="title">Kontakt</h1>
          </div>
          <ContactForm name="Home" successPath="/contact/success" />
        </div>
      </section>
      <About aboutMe={aboutMe} />
    </>
  )
}




