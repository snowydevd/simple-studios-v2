import React from "react";
import SimpleButton from "../components/Button";
export default function Planes() {
  return (
    <main className="  flex justify-center items-center">
      {/* PLANS CONTAINER */}
      <section className="w-11/12 lg:w-3/4 flex flex-col lg:flex-row justify-center items-center mt-16">
        {/* BASIC PLAN */}
        {/* PLAN CARD */}
        <div className="m-3 bg-white rounded-lg w-11/12 lg:w-8/12 xl:w-1/4 text-center">
          <h3 className="text-3xl font-semibold text-black m-10">
            Plan Basico
          </h3>
          <h4 className="text-xl font-bold text-black m-5">Pagina Web</h4>
          <div className="m-10">
            <ul className="text-left">
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Dominio Propio
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                UX/UI
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Personalización a gusto
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Redes sociales
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Archivos descargables
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Asesoramiento
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Mini-Catálogo
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Contacto vía email de la compañia
              </li>
              <li className="marker:text-red-600 list-outside list-disc text-black">
                Base de datos
              </li>
              <li className="marker:text-red-600 list-outside list-disc text-black">
                Registro e inicio de sesión de usuarios
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-between items-center mt-3 text-black p-12">
            <p className="text-xl font-extrabold">USD249</p>
            <SimpleButton href="/contact">Comprar</SimpleButton>
          </div>
        </div>

        {/* ADVANCED PLAN */}
        {/* CARD PLAN */}
        <div className="m-3 bg-white rounded-lg w-11/12 lg:w-8/12 xl:w-1/4 text-center">
          <h3 className="text-3xl font-semibold text-black m-10">
            Plan Business
          </h3>
          <h4 className="text-xl font-bold text-black m-5">E-commerce</h4>
          <div className="m-10">
            <ul className="text-left">
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Dominio Propio
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                UX/UI
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Personalización a gusto
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Redes sociales
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Archivos descargables
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Asesoramiento
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Mini-Catálogo
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Contacto vía email de la compañia
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Base de datos
              </li>
              <li className="marker:text-green-500 list-outside list-disc text-black">
                Registro e inicio de sesión de usuarios
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-between items-center mt-3 text-black p-12">
            <p className="text-xl font-extrabold">USD449</p>
            <button className="p-3 text-xl font-extrabold tracking-tight rounded-lg bg-blue-300 duration-200 text-white">
              Sin Stock
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
