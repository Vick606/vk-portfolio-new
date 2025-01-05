'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Github, Globe, Lock } from 'lucide-react';

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoLink?: string;
  githubLink: string;
  isPrivate?: boolean;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demoLink,
  githubLink,
  isPrivate,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[52rem] overflow-hidden rounded-lg border bg-white/50 shadow-lg transition hover:bg-gray-50 dark:bg-gray-900/50 dark:hover:bg-gray-800/50 sm:h-[20rem]">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex gap-2">
              <Link
                href={githubLink}
                target="_blank"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="View source code"
              >
                <Github className="h-5 w-5" />
              </Link>
              {demoLink && (
                <Link
                  href={demoLink}
                  target="_blank"
                  className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                  aria-label="View live demo"
                >
                  <Globe className="h-5 w-5" />
                </Link>
              )}
              {isPrivate && (
                <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                  <Lock className="h-5 w-5" />
                </div>
              )}
            </div>
          </div>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
            {description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider dark:from-blue-400/20 dark:to-purple-400/20"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          quality={95}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition 
            group-even:-left-40 group-even:right-[initial] 
            group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] 
            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 
            sm:block"
          width={450}
          height={300}
        />
      </section>
    </motion.div>
  );
}