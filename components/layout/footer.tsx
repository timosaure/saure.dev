
import SocialLink from "./social_link"

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {

  return (
    <footer className="block bg-primary text-white pt-8 pb-16">
      <div className="flex flex-col items-center">
        <div>
          <SocialLink icon={faGithub} href="https://github.com/timosaure" />
          <SocialLink
            icon={faLinkedinIn}
            href="https://www.linkedin.com/in/timosaure"
          />
          <SocialLink icon={faEnvelope} href="/contact" />
        </div>
        <p className="my-5 text-base">
          {"Copyright Ⓒ " + new Date().getFullYear() + " Timo Saure"}
        </p>
        <p className="has-text-white">Softwareentwickler am Bodensee</p>
      </div>
    </footer>
  )
}

export default Footer
