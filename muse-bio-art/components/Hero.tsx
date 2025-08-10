"use client";
import { motion } from "framer-motion";
import Video from "./Video";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Video
          src="/images/v1.mp4"
          poster="/images/p1.png"
          className="h-[75vh]"
        />
      </div>
      <div className="relative mx-auto flex h-[75vh] max-w-screen-content flex-col items-start justify-end px-6 pb-14">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold md:text-6xl"
        >
          Every cycle is an opportunity.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 max-w-2xl text-lg md:text-xl"
        >
          Muse Bio is a stem cell biobank enabling at-home, non-invasive collection of
          menstrual blood–derived stem cells — consent-first, ethical, and built for impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 flex gap-3"
        >
          <a href="mailto:muse@mycells.bio" className="rounded-xl bg-black px-5 py-3 text-white hover:opacity-90">
            Build with Muse
          </a>
          <a
            href="https://www.mycells.bio/"
            target="_blank"
            className="rounded-xl bg-white/80 px-5 py-3 text-black backdrop-blur hover:bg-white"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
}
