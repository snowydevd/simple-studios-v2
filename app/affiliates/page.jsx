"use client";

import Image from "next/image";
import AslShot from "../../public/aslShot.png";
import AslShotPhone from "../../public/aslShotPhone.png";

import { AnimatePresence, motion } from "framer-motion";
import SimpleButton from "../components/Button";
import { BsInstagram } from "react-icons/bs";

export default function Affiliates() {
  return (
    <AnimatePresence>
      <main className="flex flex-col justify-center items-center w-full ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <section className="w-full flex flex-col justify-start items-center mb-16 lg:mb-0 lg:mt-32">
            <h2 className="text-4xl lg:text-6xl font-extrabold font-sans tracking-tighter asl-gradient mb-3 p-3">
              ASL Marketing
            </h2>
            <div className="h-[30vh] w-11/12 flex flex-col lg:flex-row justify-between p-7 items-center mt-6 lg:mt-16">
              <Image
                alt="ASL Shot"
                src={AslShot}
                width={700}
                className="lg:block hidden"
              />
              <Image
                alt="ASL Shot"
                src={AslShotPhone}
                width={700}
                className="lg:hidden block"
              />

              <div className="text-center lg:text-right flex flex-col">
                <p className="text-xl font-sans font-semibold">
                  Haz crecer tu negocio con ASL Marketing haciendole saber a mas
                  gente sobre tu negocio/trabajo
                </p>
                <div className="flex justify-center lg:justify-end items-center w-full gap-5 mt-3">
                  <a
                    target="_blank"
                    href="https://asl-marketing.vercel.app"
                    className="px-5 py-2 text-xl  tracking-tight rounded-lg bg-slate-800 hover:bg-blue-800 hover:-translate-y-1 duration-200 text-white"
                  >
                    Sitio Web
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/aslmarketinguy/?hl=es"
                    className="px-5 py-2 text-xl  tracking-tight rounded-lg bg-slate-800 hover:bg-blue-800 hover:-translate-y-1 duration-200 text-white"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </AnimatePresence>
  );
}
