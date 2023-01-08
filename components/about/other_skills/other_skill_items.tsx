
import Image from 'next/image';
import { OtherSkill } from "../about-me";


const OtherSkillItems = (props: { skills: OtherSkill[] }) => {
  const columns = props.skills.map((skill, index) => (
    <a key={index} className="p-3" href={skill.url}>
      <Image
        src={skill.image}
        alt="Company logo"
        height={60} />
    </a>
  ))

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-3xl font-bold mt-6 mb-4">
        <h1 className="title mb-8">Weitere Kompetenzen...</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly gap-x-4">
        {columns}
      </div>
    </div>
  )
}

export default OtherSkillItems
