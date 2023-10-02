"use client";

import Image from "next/image";
import Logo from "../public/sideImage.svg";
import PhoneLogo from "../public/sidePhoneImage.svg";
import LargeLogo from "../public/largeLogo.svg";
import { Suspense } from "react";

import SimpleButton from "./components/Button";

import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence wait>
      <Suspense fallback={<p>Cargando</p>}>
        <main className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <section className="max-w-screen-xl h-[80vh] flex justify-center  lg:relative">
              <div className="w-full flex flex-col justify-center items-center lg:relative">
                {/* <Image alt='Simple Studios Logo' width={200} src={PhoneLogo} className='lg:hidden block'/> */}
                <video
                  autoPlay="autoPlay"
                  loop="loop"
                  muted
                  className="w-full xl:hidden block"
                >
                  <source src="/world.mp4" type="video/mp4" />
                </video>

                <div className="w-full lg:w-[50vh] flex flex-col justify-center lg:justify-start text-center items-center lg:items-start mt-24 lg:mt-0 ">
                  <h1 className="text-[42px] lg:text-[60px] font-extrabold tracking-tight text-white">
                    SIMPLE STUDIOS
                  </h1>

                  <p className="text-[20px] font-semibold text-white">
                    Transformamos{" "}
                    <strong className="font-extrabold text-yellow-500">
                      Ideas
                    </strong>{" "}
                    en{" "}
                    <strong className="font-extrabold text-blue-900">
                      Experiencias Digitales.
                    </strong>
                  </p>
                  <div className="flex w-full justify-center lg:justify-start items-center gap-10 mt-8">
                    <SimpleButton href="/info">Mas info</SimpleButton>

                    <SimpleButton href="/plans">Planes</SimpleButton>
                  </div>
                </div>
              </div>

              <video
                autoPlay="autoPlay"
                loop="loop"
                muted
                className="w-10/12 xl:block hidden"
              >
                <source src="/world.mp4" type="video/mp4" />
              </video>
            </section>
          </motion.div>
        </main>
      </Suspense>
    </AnimatePresence>
  );
}
