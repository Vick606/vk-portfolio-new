import React from "react";
import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/common/components/ui";
import { motion, AnimatePresence } from "framer-motion";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    if (!pending && success) {
      const timer = setTimeout(() => setSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [pending, success]);

  return (
    <Button
      type="submit"
      className={`
        group relative flex h-12 w-40 items-center justify-center gap-2 
        rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
        font-medium text-white shadow-lg transition-all 
        hover:scale-[1.02] hover:shadow-xl 
        disabled:cursor-not-allowed disabled:opacity-70
        dark:from-blue-400 dark:to-purple-400
      `}
      disabled={pending}
      onClick={() => !pending && setSuccess(true)}
    >
      <AnimatePresence mode="wait">
        {pending ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending...
          </motion.div>
        ) : success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-green-100"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Sent!
          </motion.div>
        ) : (
          <motion.div
            key="submit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}