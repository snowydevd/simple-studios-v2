import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import simpleLogo from "../../public/logo.svg";

export default async function Navbar() {
  return (
    <nav className=" flex flex-row justify-between items-center p-10 sticky top-0 bg-black z-50  rounded-lg">
      <a
        href="/"
        className="text-3xl font-extrabold tracking-tighter text-white"
      >
        Simple Studios
      </a>

      {/* <Image alt='' width={125} src={simpleLogo}/> */}
      <div className="hidden lg:block ">
        <div className="flex gap-12 ">
          <ul className="flex gap-7 justify-center items-center text-xl font-semibold ">
            <li className="hover:-translate-y-1 duration-200">
              <a
                href="/plans"
                className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
              >
                Planes
              </a>
            </li>
            <li className="hover:-translate-y-1 duration-200">
              <a
                href="/info"
                className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
              >
                Informacion
              </a>
            </li>
            <li className="hover:-translate-y-1 duration-200">
              <a
                href="/affiliates"
                className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
              >
                Afiliados
              </a>
            </li>
            <li className="hover:-translate-y-1 duration-200">
              <a
                href="/contact"
                className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* <ThemeSwitcher/> */}
        </div>
      </div>

      <div className="block lg:hidden w-1/6">
        <div className="flex justify-center items-center">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-primary border-none text-2xl bg-transparent hover:bg-transparent light:bg-black"
              >
                <AiOutlineMenu className=" " />
              </label>
            </div>
            <div className="drawer-side l">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <div className="menu  flex min-h-full bg-base-200 text-base-content  justify-start items-center">
                <Image alt="drawer logo" src={simpleLogo} width={100} />
                <ul className="menu p-4 w-56 h-72 flex text-base-content text-xl flex-col font-semibold">
                  {/* Sidebar content here */}
                  <li className="hover:-translate-y-1 duration-200">
                    <a
                      href="/plans"
                      className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Planes
                    </a>
                  </li>
                  <li className="hover:-translate-y-1 duration-200">
                    <a
                      href="/info"
                      className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Informacion
                    </a>
                  </li>
                  <li className="hover:-translate-y-1 duration-200">
                    <a
                      href="/affiliates"
                      className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Afiliados
                    </a>
                  </li>
                  <li className="hover:-translate-y-1 duration-200">
                    <a
                      href="/contact"
                      className="hover:shadow-lg hover:bg-slate-950 hover:shadow-slate-700 text-white px-3 py-2 rounded-lg duration-150"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
