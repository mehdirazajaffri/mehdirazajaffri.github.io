import {
  aws,
  backend,
  berkeley,
  coverhunt,
  css,
  django,
  docker,
  frontend,
  git,
  graphql,
  html,
  javascript,
  nodejs,
  postgresql,
  prototyping,
  python,
  reactjs,
  redux,
  sellanycar,
  servicemart,
  tailwind,
  typescript,
  ux,
  venturedive,
  vistajet,
  xbyoj
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Microservices Development',
    icon: ux,
  },
  {
    title: 'Cloud / DevOps',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'python',
    icon: python
  },
  {
    name: "Django",
    icon: django
  },
  {
    name: "AWS",
    icon: aws
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: "Node js",
    icon: nodejs
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  
];

const experiences = [
  {
    title: 'Software Enginner',
    company_name: 'VentureDive',
    icon: venturedive,
    iconBg: '#333333',
    date: 'Feb 2016 - Dec 2018',
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'VentureDive',
    icon: venturedive,
    iconBg: '#333333',
    date: 'Dec 2018 - Dec 2019',
  },
  {
    title: 'Software Developer',
    company_name: 'SellanyCar',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2020 - March 2021',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Berkeley Assets',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2021 - Apr 2022',
  },
  {
    title: 'Lead Full Stack Developer',
    company_name: 'ojlifestyle',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'ServiceMarket',
    description: 'ServiceMarket is the easiest way to book home services such as home cleaning, PCR test at home, moving, salon at home, home maintenance, handyman. Developed end to end System.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: servicemart,
    company: "VentureDive",
    demo: 'https://servicemarket.com/',
  },
  {
    id: 'project-2',
    name: 'Sell Any Car',
    description: 'Sell your car in 30 minutes, Developed Image Processing microservice using AWS Step Functions',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: sellanycar,
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'VistaJet',
    description:
      'VistaJet offers access to a global fleet of silver and red jets, offering an unparalleled cabin experience flying into and out of the hardest to reach destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: vistajet,
    demo: 'https://vistajet.com/',
  },
  {
    id: 'project-4',
    name: 'Berkeley Assets',
    description: `Devloped the entire Admin System with DJango Admin, Novus App on Flutter and Django Rest`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: berkeley,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'X by OJ',
    description:
      'Loyalty Application using djstripe, django and drf',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: xbyoj,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },  
];

export { services, technologies, experiences, projects };
