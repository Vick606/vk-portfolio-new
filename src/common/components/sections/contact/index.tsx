"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SubmitBtn from "./_components/submit-btn";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";
import { sendEmail } from "@/common/utils/actions/send-email";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Get In Touch</SectionHeading>
      
      <div className="mt-8 grid w-[min(100%,68rem)] gap-8 px-4 md:grid-cols-2">
        {/* Contact Information Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:bg-white/10"
        >
          <h3 className="mb-6 text-xl font-semibold">Let's Connect</h3>
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:victor.koech@example.com"
              className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300"
            >
              <Mail className="h-5 w-5" />
              victor.koech@example.com
            </a>
            <a 
              href="https://github.com/Vick606"
              target="_blank"
              className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300"
            >
              <Github className="h-5 w-5" />
              GitHub Profile
            </a>
            <a 
              href="https://linkedin.com/in/victor-koech"
              target="_blank"
              className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:bg-white/10"
        >
          <form
            className="flex flex-col gap-4"
            action={async (formData) => {
              const { error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Message sent successfully!");
            }}
          >
            <div className="relative">
              <input
                className="peer h-14 w-full rounded-lg border bg-gray-50/50 px-4 pt-2 transition-all focus:border-blue-500 focus:outline-none dark:bg-white/5 dark:text-white"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder=" "
              />
              <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-0.5 peer-[:not(:placeholder-shown)]:text-sm dark:text-gray-400">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                className="peer h-52 w-full resize-none rounded-lg border bg-gray-50/50 p-4 pt-6 transition-all focus:border-blue-500 focus:outline-none dark:bg-white/5 dark:text-white"
                name="message"
                required
                maxLength={5000}
                placeholder=" "
              />
              <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-0.5 peer-[:not(:placeholder-shown)]:text-sm dark:text-gray-400">
                Your Message
              </label>
            </div>

            <div className="flex justify-end">
              <SubmitBtn />
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}