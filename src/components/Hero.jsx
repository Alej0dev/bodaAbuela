import { config } from "../config";
import Frame from "./Frame";
import Ornament from "./Ornament";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-celeste px-10 text-center text-white">
      {/* Foto de fondo desvanecida (public/fondo.jpg): se funde con el azul hacia abajo */}
      <img
        src="/fondo.jpeg"
        alt=""
        className="absolute bottom-0 left-1/2 w-[270%] max-w-none -translate-x-1/2 opacity-60 sm:w-full sm:max-w-8xl"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse at 50% 60%, #000 35%, transparent 75%)",
          maskImage: "radial-gradient(ellipse at 50% 60%, #000 35%, transparent 75%)",
        }}
      />
      {/* Velo azul para que el texto se lea sobre las luces */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,63,115,.85) 0%, rgba(31,63,115,.7) 50%, rgba(47,90,150,.45) 100%)",
        }}
      />

      <Frame light />
      <div className="relative flex flex-col items-center [text-shadow:0_2px_20px_rgba(20,40,80,.6)]">
        <p className="text-xl italic text-white/85">Tenemos una invitacion especial para ti</p>
        <Ornament light className="mt-4" />
        <h1 className="mt-8 font-script text-7xl leading-tight sm:text-9xl">
          {config.novio} <span className="text-4xl text-claro sm:text-6xl">y</span> {config.novia}
        </h1>
        <p className="mt-8 text-2xl italic">Nuestra boda</p>
      </div>
      <a href="#mensaje" className="absolute bottom-14 flex flex-col items-center gap-2 font-sans text-sm text-white/85">
        Desliza hacia abajo para continuar
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
