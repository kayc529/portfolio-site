import { IWorkExperience } from '@interface/IWorkExperience';

export const workExperience: IWorkExperience[] = [
  {
    id: 1,
    company: 'Accenture',
    jobTitle: 'Software Developer',
    date: 'Apr 2020 - Apr 2021',
    achievements: [
      'Led the end-to-end development of a cross-platform mobile application using React Native',
      'Adapted agile methodologies and collaborated closely with a team of frontend and backend developers, UX/UI designers, and business analysts to ensure on-time delivery of project deliverables',
      'Implemented highly reusable components with detailed documentation, optimizing the development process and contributing to a 50% reduction in development time',
      'Demonstrated leadership as a mentor to less experienced developers, offering guidance on best practices, coding standards, and code reviews, improving overall code quality and resulting in a more efficient and collaborative development environment',
    ],
    image: 'accenture.png',
    link: 'https://www.accenture.com/ca-en',
  },
  {
    id: 2,
    company: 'Antelope International Limited',
    jobTitle: 'Mobile Application Developer',
    date: 'Aug 2019 - Mar 2020',
    achievements: [
      'Implemented innovative features for a document management system on the Android platform, enhancing user experience across both mobile and tablet applications',
      "Resolved 90% of the known bugs and issues, significantly boosting the system's reliability and improving the overall user experience",
      'Acted as a point of contact for end-users, handling their feedback and inquiries with exceptional responsiveness while providing technical advice and support',
      'Represented the company as a technical consultant in meetings with business partners',
    ],
    image: 'antelope.png',
    link: 'https://www.antelopeglobal.com/',
  },
  {
    id: 3,
    company: 'Skytree Digital Limited',
    jobTitle: 'Frontend Developer',
    date: 'Dec 2018 - Jun 2019',
    achievements: [
      'Contributed to the development and maintenance of an award-winning mobile game “Trillionia”',
      'Introduced an efficient zipping system for game assets, reducing download time by 30% and significantly enhancing the game’s accessibility and user satisfaction',
      'Collaborated closely with cross-functional teams in a fast-paced start-up environment',
    ],
    image: 'skytree.png',
    link: 'https://www.skytree.com.hk/',
  },
];
