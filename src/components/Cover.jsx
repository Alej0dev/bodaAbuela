import { useState } from "react";
import { config } from "../config";
import { textoPersonas } from "../utils/invitation";
import Frame from "./Frame";
import Ornament from "./Ornament";

const half = "absolute top-0 h-full w-1/2 bg-blanco transition-transform duration-[1400ms] ease-in-out";

export default function Cover({ onOpen, personas, familia }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dos hojas que se abren hacia los lados */}
      <div className={`${half} left-0 ${opening ? "-translate-x-full" : ""}`} />
      <div className={`${half} right-0 ${opening ? "translate-x-full" : ""}`} />

      <div className={`absolute inset-0 transition-opacity duration-500 ${opening ? "opacity-0" : ""}`}>
        <Frame />
        <div className="relative flex h-full flex-col items-center justify-center px-10 text-center">
          <p className="text-xl italic text-profundo">Nuestra boda</p>
          <Ornament className="mt-4" />
          <h1 className="mt-8 font-script text-7xl leading-tight text-tinta sm:text-8xl">
            {config.novio}
            <span className="block text-4xl text-marino">&</span>
            {config.novia}
          </h1>
          <p className="mt-6 text-xl italic text-tinta/75">“{config.frase}”</p>
          <p className="mt-4 font-sans text-sm text-profundo">
            {familia ? `Familia ${familia} · ` : ""}Invitación para {textoPersonas(personas)}
          </p>
          <button
            onClick={handleOpen}
            className="mt-12 border border-profundo px-8 py-3 font-sans text-sm tracking-widest text-profundo transition-colors hover:bg-profundo hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-marino"
          >
            Abrir invitación
          </button>
        </div>
      </div>
    </div>
  );
}
