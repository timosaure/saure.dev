import { PortfolioItem } from "../components/about/about-me";
import airbus_logo from "../public/company_logos/airbus.png";
import university_stuttgart_logo from "../public/company_logos/university_stuttgart.png";

export const portfolio: PortfolioItem[] = [
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
];