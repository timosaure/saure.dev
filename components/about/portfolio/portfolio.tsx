import { PortfolioItem } from "../about-me"
import PortfolioItemSection from "./portfolio_section"

const Portfolio = (props: { items: PortfolioItem[] }) => {
  const rows = props.items.map((edge, index) => (
    <PortfolioItemSection key={index} item={edge} />
  ))

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center text-3xl font-bold mt-6 mb-4">
          <h1 className="title mb-8">Portfolio</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-12 lg:gap-x-24 items-start">
        {rows}
      </div>
    </>
  )
}

export default Portfolio
