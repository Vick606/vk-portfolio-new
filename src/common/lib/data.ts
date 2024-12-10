import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import hirredImg from '@/../public/images/Hirred.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import railscoutImg from '@/../public/images/RailScout.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'React Intern',
    location: 'Jabalpur',
    description: `Developed a React.js-based front-end for a user feedback portal that improved customer data collection, reducing data processing time by 25%.`,
    icon: React.createElement(BriefcaseBusinessIcon),
   
    date: 'Dec 2023 - Feb 2024',
  },
  {
    title: 'Jabalpur Engineering College',
    location: 'Jabalpur,M.P',
    description: `Bachelor's degree in Computer Science and Engineering. Studying on the faculty of Computer Scienceand Software Engineering. `,
   icon: React.createElement(BookIcon),
    date: 'Jun 2021 - Present',
  },
  
  {
    title: 'Kendriya Vidhyalaya C.M.M',
    location: 'Jabalpur',
    description: `Completed My High School with Subjects : Math,Biology,Chemistry,Physics,English.`,
    icon: React.createElement(BookIcon),
    date: 'June 2020',

  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  hirredImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Hirred',
    description:
      'A platform for Recuriter to Hire and Candidates gets Hired with robust user management.',
    tags: [
      'React',
      'Supabase',
      'Axios',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: hirredImg,
    link: 'https://hirred1.vercel.app/',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/bbyc4kes/portfolio',
  },
  {
    title: 'RailScout',
    description: `RailScout is a railway pathfinder app that uses React, Three.js, and Geolocation API to visually map routes between station destinations.`,
    tags: [
      'React',
      'TypeScript',
      'Three.js',
      'Geolocation',
      'SCRUM Methodology',
      'End-to-End Development',
    ],
    imageUrl: railscoutImg ,
    link: 'https://rail-scouts-omega.vercel.app/',
  },
  // {
  //   title: 'Project Pending',
  //   description:
  //     '',
  //   tags: [
  //     'React',
  //     'TypeScript',
  //     'Next.js',
  //     'MySQL',
  //     'Clerk',
  //     'Stripe Connect',
  //     'Shadcn',
  //     'Tailwind',
  //   ],
  //   imageUrl: ,
  //   link: '',
  // },
  // {
  //   title: 'Projet Pending ',
  //   description:
  //     ',
  //   imageUrl: ,
  //   link: '',
  // },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
