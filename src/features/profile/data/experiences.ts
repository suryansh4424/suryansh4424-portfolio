import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "Glorious Insight",
    positions: [
      {
        id: "1",
        title: "Data Analyst",
        year: "June 2023 — July 2024",
        employmentType: "INTERN",
        icon: "business",
        description:
          "- Collaborated with the Data Analytics Team across 7+ client projects to enhance data visualization\n- Advanced SQL queries and data analysis\n- Technologies used: PowerBI, SQL(SSMS)\n- Developed comprehensive data insights and visualizations",
        skills: [
          "SQL",
          "PowerBI",
          "Data Analysis",
          "Data Visualization",
          "SSMS",
          "Problem-solving"
        ],
        expanded: true,
      }
    ]
  },
  {
    company: "Teachnook with Cognizance (IIT Roorkee)",
    positions: [
      {
        id: "2",
        title: "Trainee",
        year: "June 2024 — July 2024",
        employmentType: "Remote",
        icon: "code",
        description:
          "- Contributed to 4+ full-cycle projects, enhancing CI/CD pipelines and Agile processes\n- Used Jenkins, Docker, AWS, and Planning Poker for faster delivery timelines\n- Engineered an Amazon Lex-based hotel booking chatbot for automated reservations",
        skills: [
          "Jenkins",
          "Docker",
          "AWS",
          "CI/CD",
          "Agile",
          "Amazon Lex",
          "Cloud Services"
        ],
        expanded: true,
      }
    ]
  }
];
