"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useState } from "react";
import RedoAnimText from "./redo-text-animation";
import CursorBlinker from "./cursor-blinker";

export interface ITextAnimationProps {
  delay: number;
  baseText: string;
  subtitle?: string;
}

export default function TextAnimation({
  delay,
  baseText,
  subtitle,
}: ITextAnimationProps) {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "spring",
      delay: delay,
      duration: 1.2,
      stiffness: 100,
      damping: 15,
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
  }, [baseText.length, count, delay]);

  return (
    <motion.span
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-10 h-64 max-w-96 text-start text-[2rem] font-extrabold lg:text-[3rem]"
    >
      <motion.span className="block">{displayText}</motion.span>
      {done && subtitle && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="block text-lg font-normal text-gray-600 dark:text-gray-400"
        >
          {subtitle}
        </motion.span>
      )}
      {done && <br />}
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </motion.span>
  );
}