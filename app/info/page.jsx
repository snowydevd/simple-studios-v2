"use client";

import Image from "next/image";
import Logo from "../../public/sideImage.svg";
import PhoneLogo from "../../public/sidePhoneImage.svg";
import SimpleButton from "../components/Button";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ecommerce from "../../public/e-commerce.svg";

import { BsFillInfoSquareFill, BsFillHandbagFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";

import { AnimatePresence, motion } from "framer-motion";

export default function Info() {
  return (
    <AnimatePresence>
      <main className="flex flex-col justify-center items-center w-full ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <section className="w-full flex justify-center items-center mb-16 lg:mb-0">
            {/* CONTAINER */}
            <div className="flex flex-col w-full mb-16 lg:mb-0 p-4">
              {/* SUB-CONTAINER */}
              <div className=" flex flex-col lg:flex-row mt-0 lg:mt-3">
                {/* BLOCKS */}
                {/* LARGE */}
                <div className="animate-fade-down animate-duration-1000  flex flex-row p-8 bg-zinc-900 rounded-lg w-full lg:w-3/5 mt-3">
                  <div className="flex flex-col items-center justify-center text-center lg:text-start lg:justify-start lg:items-start text-2xl lg:text-4xl">
                    <h1 className="text-left lg:text-center text-3xl font-bold mb-3">
                      <strong className="flex justify-center items-center gap-3">
                        <BsFillInfoSquareFill className="text-blue-700" /> A qué
                        nos dedicamos?
                      </strong>
                    </h1>
                    <p className="text-left text-xl lg:text-xl mb-5">
                      Somos una empresa especializada en diseñar y crear páginas
                      web que cautivan y funcionan. Nuestro equipo de expertos
                      en diseño y desarrollo web está dedicado a transformar tus
                      ideas en sitios web atractivos y efectivos. Con un enfoque
                      en la innovación y la usabilidad, estamos aquí para llevar
                      tu presencia en línea al siguiente nivel.
                    </p>
                    <SimpleButton href="./plans">Comenzar</SimpleButton>
                  </div>
                </div>

                {/* SMALL */}
                <div className="animate-fade-left animate-duration-1000  flex flex-col p-8 bg-zinc-900 lg:ml-3 rounded-lg w-5/5 lg:w-2/5 mt-3 text-center lg:text-left">
                  <h1 className="text-center lg:text-left text-3xl font-bold mb-3">
                    <strong className="flex lg:justify-start lg:items-start items-center justify-center gap-3">
                      <FaHandsHelping className="text-blue-700" /> Asesoramiento
                    </strong>
                  </h1>
                  <p className="text-center lg:text-left text-xl lg:text-xl ">
                    {" "}
                    No solo construimos sitios excepcionales, también ofrecemos
                    un asesoramiento insuperable. Nos enorgullece guiar a
                    nuestros clientes en cada paso del proceso, desde la
                    conceptualización hasta el lanzamiento y más allá. Nuestra
                    misión es asegurarnos de que tu visión se materialice en una
                    presencia web exitosa y duradera..
                  </p>
                </div>
              </div>

              {/* SUB-CONTAINER */}
              <div className="flex flex-col lg:flex-row mb-3">
                {/* BLOCKS */}
                {/* SMALL */}
                <div className="animate-fade-right animate-duration-1000  flex flex-col p-8 bg-zinc-900 rounded-lg w-5/5 lg:w-2/5 mt-3 text-center lg:text-left">
                  <h1 className="text-center lg:text-left text-3xl font-bold mb-3">
                    <strong className="flex lg:justify-start lg:items-start items-center justify-center gap-3">
                      <HiMiniUserGroup className="text-blue-700" /> Grupo de
                      afiliados
                    </strong>
                  </h1>
                  <p className="text-center lg:text-left  text-xl lg:text-xl ">
                    Únete a nuestro emocionante programa de afiliados y colabora
                    con una empresa líder en diseño y creación de páginas web.
                    Convierte tu pasión por la web en ganancias, promocionando
                    nuestros servicios excepcionales. Obtén comisiones generosas
                    y accede a recursos exclusivos para impulsar tu éxito..
                  </p>
                </div>
                {/* LARGE */}
                <div className="animate-fade-up animate-duration-1000  flex flex-col lg:flex-row lg:items-start items-center justify-center lg:justify-between bg-zinc-900 rounded-lg lg:ml-3 w-5/5 lg:w-3/5 mt-3">
                  <div className="flex flex-col p-7 text-center lg:text-left text-2xl  lg:text-4xl">
                    <h1 className="text-center lg:text-left text-3xl font-bold mb-3">
                      <strong className="flex lg:justify-start lg:items-start items-center justify-center gap-3">
                        <BsFillHandbagFill className="text-blue-700" /> Comercio
                        electrónico
                      </strong>
                    </h1>
                    <p className="text-center lg:text-left text-xl lg:text-xl ">
                      En nuestra empresa, entendemos que el e-commerce es el
                      motor del comercio moderno. Diseñamos y creamos páginas
                      web que no solo son visualmente atractivas, sino también
                      altamente funcionales para el comercio electrónico. Te
                      ayudamos a aprovechar al máximo el potencial de vender en
                      línea, brindando soluciones de diseño que impulsan tus
                      ventas y hacen que tu negocio crezca en el mundo digital.
                    </p>
                  </div>

                  <Image
                    className=" lg:mr-14 w-5/12 lg:w-4/12"
                    src={ecommerce}
                    width={300}
                    alt="laptop"
                  />
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </AnimatePresence>
  );
}
