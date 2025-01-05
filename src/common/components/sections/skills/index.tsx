"use client";

import React from "react";
import { skillsData } from "@/common/lib/data";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

const skillCategories = {
  "Data Science & ML": [
    ["Python", "/svgs/python.svg"],
    ["TensorFlow", "/svgs/tensorflow.svg"],
    ["PyTorch", "/svgs/pytorch.svg"],
    ["Scikit-learn", "/svgs/scikit.svg"],
    ["Pandas", "/svgs/pandas.svg"],
  ],
  "Web Development": [
    ["JavaScript", "/svgs/javascript-js.svg"],
    ["TypeScript", "/svgs/typescript-icon.svg"],
    ["React", "/svgs/react.svg"],
    ["Next.js", "/svgs/nextjs.svg"],
    ["Node.js", "/svgs/node-js.svg"],
  ],
  "Databases & Tools": [
    ["PostgreSQL", "/svgs/postgresql.svg"],
    ["MongoDB", "/svgs/mongodb-original.svg"],
    ["Docker", "/svgs/Docker.svg"],
    ["Git", "/svgs/git.svg"],
    ["AWS", "/svgs/aws.svg"],
  ]
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center space-y-16 py-24 text-center dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>Technical Expertise</SectionHeading>
      
      <div className="grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="rounded-xl bg-gray-50 p-6 shadow-lg dark:bg-white/5"
          >
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white/90">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill[0]}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="flex items-center rounded-lg bg-white px-4 py-2 shadow-sm transition-all hover:scale-105 dark:bg-white/10"
                >
                  <Image
                    src={skill[1]}
                    alt={skill[0]}
                    width={24}
                    height={24}
                    className="mr-2 h-6 w-6"
                  />
                  <span className="text-sm font-medium">{skill[0]}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <div className="flex w-full justify-center">
        <SectionDivider />
      </div>
    </section>
  );
}