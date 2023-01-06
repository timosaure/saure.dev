
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialLink = (props: { icon: IconDefinition, href: string }) => {
  return (
    <a className="cursor-pointer rounded-full border-white border-2 border-solid mx-1 h-14 w-14 text-2xl inline-flex justify-center items-center hover:bg-white hover:text-primary" href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  )
}

export default SocialLink
