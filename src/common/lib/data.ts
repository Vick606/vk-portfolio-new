import React from 'react';
import portfolioImg from '@/../public/images/portfolio.png';
// Import your project images here
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
] as const;

export const experiencesData = [
  {
    title: 'Software Developer',
    location: 'Nairobi, Kenya',
    description: 'Full-stack developer specializing in React and Node.js applications. Led development of multiple web applications improving user engagement by 40%.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '2022 - Present',
  },
  {
    title: 'Technical Consultant',
    location: 'Remote',
    description: 'Provided technical consulting services for web development projects, specializing in modern JavaScript frameworks and cloud solutions.',
    icon: React.createElement(LaptopMinimalIcon),
    date: '2020 - 2022',
  },
  {
    title: 'Computer Science Degree',
    location: 'University Name',
    description: 'Bachelors degree in Computer Science with focus on software engineering and web technologies.',
    icon: React.createElement(BookIcon),
    date: '2016 - 2020',
  },
] as const;

export const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and secure payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
    imageUrl: portfolioImg, // Replace with your project image
    link: 'https://github.com/YourUsername/project1',
  },
  {
    title: 'Task Management System',
    description: 'Enterprise task management system with real-time updates and team collaboration features.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
    imageUrl: portfolioImg, // Replace with your project image
    link: 'https://github.com/YourUsername/project2',
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern portfolio website built with Next.js and TypeScript, featuring responsive design and animations.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    imageUrl: portfolioImg,
    link: 'https://github.com/YourUsername/portfolio',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Python', '/svgs/python.svg'],
  ['Django', '/svgs/django.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['AWS', '/svgs/aws.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
] as const;