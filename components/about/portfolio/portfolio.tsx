import { PortfolioItem } from "../about-me"
import PortfolioItemSection from "./portfolio_section"

const Portfolio = (props: { items: PortfolioItem[] }) => {
  const rows = props.items.map((edge, index) => (
    <PortfolioItemSection key={index} item={edge} />
  ))

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-3xl font-bold mt-6 mb-4">
        <h1 className="title mb-8">Portfolio</h1>
      </div>
      {rows}
    </div>
  )
}

export default Portfolio
