import { StaticImageData } from "next/image";

export default interface AboutMe {
    portrait: StaticImageData,
    sections: string[],
    portfolio: PortfolioItem[],
    skills: Skill[],
    other_skills: OtherSkill[]
}

export interface PortfolioItem {
    company: string;
    timeframe: string;
    position: string;
    logo: StaticImageData;
    bulletPoints: string[];
}

export interface Skill {
    logo: StaticImageData,
    description: string
}

export interface OtherSkill {
    image: StaticImageData,
    url: string
}