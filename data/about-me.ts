import AboutMe from "../components/about/about-me";
import airbus_logo from "../public/company_logos/airbus.png";
import university_stuttgart_logo from "../public/company_logos/university_stuttgart.png";
import portrait from "../public/profile_landscape.jpg";
import angular from "../public/skills/angular.png";
import ansible from "../public/skills/ansible.svg";
import docker from "../public/skills/docker.png";
import gwt from "../public/skills/gwt.png";
import hadoop from "../public/skills/hadoop.png";
import java from "../public/skills/java.svg";
import kotlin from "../public/skills/kotlin.svg";
import maven from "../public/skills/maven.png";
import node from "../public/skills/nodejs.png";
import postgres from "../public/skills/postgres.svg";
import python from "../public/skills/python.png";
import react from "../public/skills/react.png";
import spring from "../public/skills/spring.svg";
import vuejs from "../public/skills/vuejs.png";

export const aboutMe: AboutMe = {
    "portrait": portrait,
    "sections": [
        "Hi, ich heiße Timo. Ich bin Softwareingenieur und lebe im Moment am Bodensee. Ich arbeite bei Airbus, dort kann ich täglich meine Faszination für Technologie ausleben.",
        "Ich entwickle Enterprise Software für die schnelle Analyse und Evaluation von Business Daten. Dadurch ermögliche ich es früh im Produktlebenzyklus Probleme zu erkennen.",
        "In meiner Freizeit bastle ich an Heimprojekten oder erkunde die Welt mit meiner Frau. Außerdem probiere ich immer gerne neues Essen, insbesondere wenn ich im Ausland bin."
    ],
    "portfolio": [
        {
            "company": "Airbus",
            "timeframe": "2018 - jetzt",
            "position": "Software Ingenieur",
            "logo": airbus_logo,
            "bulletPoints": [
                "Technische Leitung für eine Applikation zur Analyse und Auswertung von Tests",
                "Design und Entwicklung von einem BigData System das >250 Milliarden Datenpunkte verarbeitet"
            ]
        },
        {
            "company": "Airbus",
            "timeframe": "Oktober 2017 - März 2018",
            "position": "Praktikum Software Ingenieur",
            "logo": airbus_logo,
            "bulletPoints": [
                "Recherche und Test verschiedener BigData Technologien anhand von Anforderungen",
                "Entwicklung eines Proof-of-Concept für die Echtzeitverarbeitung von Satellitentests"
            ]
        },
        {
            "company": "Universität Stuttgart",
            "timeframe": "2014 - 2018",
            "position": "B.Sc. Luft- und Raumfahrttechnik",
            "logo": university_stuttgart_logo,
            "bulletPoints": [
                "Tutor für den Softwareentwicklungskurs",
                "Entwicklung einer wissenschaftlichen Software zur Analyse von Experimentdaten"
            ]
        }
    ],
    "skills": [
        {
            "logo": java,
            "description": "Ich benutze Java für alles, von kleinen Heimprojekten zu komplexen BigData Systemen. Dank der neuesten JDK Versionen eine moderne, schnelle Sprache mit einem riesigen Ökosystem."
        },
        {
            "logo": react,
            "description": "React's einfache und elegante Art Frontend Code zu schreiben, macht es zu meiner ersten Wahl für UI Entwicklung. Diese Website wurde mit React erstellt. In meiner Vergangenheit habe ich außerdem an Projekten mit Vue und Angular gearbeitet."
        },
        {
            "logo": docker,
            "description": "Docker ist mein Favorit für die Verwaltung und das Deployment meiner Applikationen. Gemeinsam mit docker-compose oder Kubernetes erlaubt es mir einfach meine Infrastruktur zu managen."
        }
    ],
    "other_skills": [
        { "image": node, "url": "https://nodejs.org/" },
        { "image": vuejs, "url": "https://vuejs.org/" },
        {
            "image": angular,
            "url": "https://angular.io/"
        },
        {
            "image": kotlin,
            "url": "https://kotlinlang.org/"
        },
        {
            "image": spring,
            "url": "https://spring.io/"
        },
        {
            "image": maven,
            "url": "https://maven.apache.org/"
        },
        {
            "image": ansible,
            "url": "https://www.ansible.com/"
        },
        {
            "image": hadoop,
            "url": "https://hadoop.apache.org/"
        },
        {
            "image": postgres,
            "url": "https://postgresql.org/"
        },
        {
            "image": python,
            "url": "https://www.python.org/"
        },
        {
            "image": gwt,
            "url": "http://www.gwtproject.org/"
        }
    ]
}
