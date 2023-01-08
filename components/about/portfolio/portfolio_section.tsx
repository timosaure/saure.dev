import Image from 'next/image';
import { PortfolioItem } from "../about-me";
import BulletPoints from "./bullet_points";

const PortfolioItemSection = (props: { item: PortfolioItem }) => {
  const item = props.item
  return (
    <div className="flex flex-row flex-wrap justify-center items-start gap-24 mb-16 last:mb-0">
      <div className="grow-[1] shrink-0 basis-[6rem]">
        <Image
          src={item.logo}
          alt="Company logo"
          className="w-full h-full object-contain" />
      </div>
      <div className="grow-[3] shrink-0 basis-[24rem] text-gray-800">
        <h2 className="text-xl font-semibold">{item.position}</h2>
        <h3 className="mb-3">
          {item.company} <span className="mx-1">|</span> {item.timeframe}
        </h3>
        <BulletPoints points={item.bulletPoints} />
      </div>
    </div>
  )
}

export default PortfolioItemSection
