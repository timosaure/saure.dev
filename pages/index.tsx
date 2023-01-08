import { Inter } from '@next/font/google'

import About from "../components/about/about"
import ContactSection from '../components/contact_form/contact_form'
import Home from "../components/home/home"
import Offer from "../components/home/offer"
import { aboutMe } from '../data/about-me'
import { offers } from '../data/offers'


const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Home id="home" />
      <Offer id="main" offerItems={offers} />
      <About id="about" aboutMe={aboutMe} />
      <ContactSection id="contact" />
    </>
  )
}
