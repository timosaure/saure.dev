import { IconDefinition, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="block bg-primary text-white pt-8 pb-16">
      <div className="flex flex-col items-center">
        <div>
          <FooterSocialLink icon={faGithub} href="https://github.com/timosaure" />
          <FooterSocialLink
            icon={faLinkedinIn}
            href="https://www.linkedin.com/in/timosaure" />
        </div>
        <Link className="mt-5" href="/imprint">Impressum</Link>
        <Link className="" href="/privacy">Datenschutzerklärung</Link>
        <p className="my-5 text-base">
          {"Copyright Ⓒ " + new Date().getFullYear() + " Timo Saure"}
        </p>
        <p className="has-text-white">Softwareentwickler am Bodensee</p>
      </div>
    </footer>
  )
}

function FooterSocialLink(props: { icon: IconDefinition; href: string }) {
  return (
    <a className="cursor-pointer rounded-full border-white border-2 border-solid mx-1 h-14 w-14 text-2xl inline-flex justify-center items-center hover:bg-white hover:text-primary" href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  )
}
