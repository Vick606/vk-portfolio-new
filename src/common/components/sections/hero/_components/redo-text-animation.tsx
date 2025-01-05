"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IRedoTextAnimationProps {
  delay: number;
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0);

  const texts = [
    "Transforming data into actionable insights",
    "Building intelligent ML solutions that scale",
    "Full-stack developer crafting seamless experiences",
    "Python enthusiast with a passion for innovation",
    "Specializing in data analytics and visualization",
    "Creating ML models that drive business decisions",
    "Turning complex data into simple solutions",
    "Bridging the gap between data and development",
    "Expert in predictive analytics and ML pipelines",
    "Passionate about solving real-world problems with code",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count, delay, textIndex, texts.length, updatedThisRound]);

  return (
    <motion.span 
      className="h-32 max-w-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-2 text-[1.2rem] font-bold dark:from-blue-400/20 dark:to-purple-400/20 md:text-[1.5rem] lg:text-[1.7rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
}