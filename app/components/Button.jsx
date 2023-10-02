import React from "react";

export default function SimpleButton({ children, href }) {
  return (
    <a
      href={href}
      className="px-5 py-2 text-xl  tracking-tight rounded-lg bg-slate-800 hover:bg-blue-800 hover:-translate-y-1 duration-200 text-white"
    >
      {children}
    </a>
  );
}
