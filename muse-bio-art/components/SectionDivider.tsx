"use client";
import { motion } from "framer-motion";
import Video from "./Video";

export default function SectionDivider() {
  return (
    <section className="relative my-6">
      <Video src="/images/v2.mp4" poster="/images/p2.png" className="h-[60vh]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-full bg-white/70 px-6 py-3 text-2xl font-semibold backdrop-blur md:text-3xl"
        >
          From cells to healing.
        </motion.h2>
      </div>
    </section>
  );
}
