import React from "react";
import SimpleButton from "../components/Button";
export default function Planes() {
  return (
    <main className="  flex flex-col justify-center items-center">
      {/* PLANS CONTAINER */}
      <section className="w-11/12 lg:w-3/4 flex flex-col lg:flex-row justify-center items-center mt-16">
        {/* BASIC PLAN */}
        {/* PLAN CARD */}
        <div className="m-3 bg-white rounded-lg w-11/12 lg:w-8/12 xl:w-1/4 text-center flex flex-col items-center">
          <h3 className="text-3xl font-semibold text-black m-10">
            Plan Basico
          </h3>
          <h4 className="text-xl font-bold text-white m-5 px-3 py-1 w-fit bg-blue-800 rounded-lg">
            Pagina Web
          </h4>
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

          <div className="w-full flex justify-between items-center mt-3 text-black p-5">
            <div>
              <p className="text-xl font-extrabold text-left">USD249</p>
              <p>Luego USD69/mes</p>
            </div>
            <SimpleButton href="/contact">Comprar</SimpleButton>
          </div>
        </div>

        {/* ADVANCED PLAN */}
        {/* CARD PLAN */}
        <div className="m-3 bg-white rounded-lg w-11/12 lg:w-8/12 xl:w-1/4 text-center flex flex-col items-center">
          <h3 className="text-3xl font-semibold text-black m-10">
            Plan Business
          </h3>
          <h4 className="text-xl font-bold text-white m-5 px-3 py-1 w-fit bg-yellow-500 rounded-lg">
            E-commerce
          </h4>
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

          <div className="w-full flex justify-between items-center mt-3 text-black p-5">
            <div>
              <p className="text-left text-xl font-extrabold">USD449</p>
              <p>Luego USD69/mes</p>
            </div>
            <button className="px-5 py-2 text-xl  tracking-tight rounded-lg bg-slate-400  text-white">
              Sin Stock
            </button>
          </div>
        </div>
      </section>
      <div className="bg-neutral-900 lg:bg-transparent text-center w-full p-3">
        <h2 className="text-xs lg:text-l">
          Los servicios están sujetos a modificación de precios, de acuerdo a
          las modificaciones que el usuario desee.
        </h2>
        <h2 className="text-xs lg:text-l">
          El mantenimiento del sitio web puede contratarlo con un costo mensual
          a convenir.
        </h2>
      </div>
    </main>
  );
}
