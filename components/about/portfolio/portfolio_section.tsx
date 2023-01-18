import Image from 'next/image';
import { PortfolioItem } from "../about-me";
import BulletPoints from "./bullet_points";

const PortfolioItemSection = (props: { item: PortfolioItem }) => {
  const item = props.item
  return (
    <>
      <div className="lg:justify-self-end mb-4 md:mb-0">
        <Image
          src={item.logo}
          alt="Company logo"
          className="w-full max-w-[8rem] md:max-w-[12rem] h-full object-contain" />
      </div>
      <div className="text-gray-800 mb-24 md:mb-32 last:mb-0">
        <h2 className="text-xl font-semibold">{item.position}</h2>
        <h3 className="mb-3">
          {item.company} <span className="mx-1">|</span> {item.timeframe}
        </h3>
        <BulletPoints points={item.bulletPoints} />
      </div>
    </>
  )
}

export default PortfolioItemSection
