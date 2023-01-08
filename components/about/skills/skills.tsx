import Image from 'next/image';
import { Skill } from "../about-me";

const Skills = (props: { items: Skill[] }) => {
    const rows = props.items.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
    ))

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center text-3xl font-bold mt-6">
                <h1 className="title mb-8">Kompetenzen</h1>
            </div>
            <div className="grid grid-cols-[58px_1fr] items-center gap-x-8 gap-y-16">{rows}</div>
        </div>
    )
}

const SkillItem = (props: { skill: Skill }) => {
    return (
        <>
            <div className="">
                <Image
                    src={props.skill.logo}
                    alt="Company logo"
                    className="w-full h-full object-contain" />
            </div>
            <div className="">
                <p>{props.skill.description}</p>
            </div>
        </>
    )
}

export default Skills