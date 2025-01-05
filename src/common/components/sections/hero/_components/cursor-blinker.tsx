import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 1],
    scale: [1, 1.1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export default function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={`
        inline-block 
        h-8 
        w-[3px] 
        translate-y-1 
        rounded-full 
        bg-gradient-to-b 
        from-blue-500 
        to-purple-500 
        dark:from-blue-400 
        dark:to-purple-400
        md:h-10
        lg:h-12
      `}
    />
  );
}