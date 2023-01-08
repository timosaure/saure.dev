import Image, { StaticImageData } from 'next/image';
import AboutMe from "./about-me";
import OtherSkillItems from "./other_skills/other_skill_items";
import Portfolio from "./portfolio/portfolio";
import Skills from './skills/skills';

export default function About(props: { id: string, aboutMe: AboutMe }) {

  const { sections, skills, portfolio, other_skills, portrait } = props.aboutMe



  return (
    <section id={props.id} className="py-12 flex flex-col justify-center items-center">
      <div className="container">
        <div className="text-center text-4xl font-bold mt-6 mb-8">
          <h1 className="title">Über mich</h1>
        </div>
        <div className="flex flex-col gap-y-16">
          <section>
            <AboutDetails portrait={portrait} aboutSections={sections} />
          </section>
          <section>
            <Portfolio items={portfolio} />
          </section>
          <section>
            <Skills items={skills} />
          </section>
          <section>
            <OtherSkillItems skills={other_skills} />
          </section>
        </div>
      </div>
    </section>
  )
}

function AboutDetails({ portrait, aboutSections }: { portrait: StaticImageData, aboutSections: string[] }) {

  const aboutText = aboutSections.map((section, index) => (
    <p className="mb-4" key={index}>{section}</p>
  ))

  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      <div className="grow shrink-0 basis-[28rem]">
        <Image src={portrait} alt="Company logo" className="w-full h-full object-cover" width={1024} />
      </div>
      <div className="grow shrink-0 basis-[28rem]">{aboutText}</div>
    </div>
  );
}
