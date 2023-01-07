import Offer from "./offer-model"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Offer = (props: { id: string, offerItems: Offer[] }) => {
  const cards = props.offerItems.map((item, index) => (
    <Card key={index} content={item} />
  ))

  return (
    <section id={props.id} className="py-12 px-6">
      <div className="container flex flex-row flex-wrap justify-center items-stretch">
        {cards}
      </div>
    </section>
  )
}

const Card = (props: { content: Offer }) => (
  <div className="relative w-72 border border-primary mx-4 my-5">
    <div className="absolute -top-5 right-10 text-4xl text-primary">
      <FontAwesomeIcon className="bg-white p-1" icon={props.content.icon} />
    </div>
    <div className="text-primary pt-12 pb-6 px-6">
      <h3 className="text-2xl font-bold mb-4">{props.content.title}</h3>
      <div className="">
        <p>{props.content.text}</p>
      </div>
    </div>
  </div>
)

export default Offer
