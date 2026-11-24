import { config } from "../config";

export default function Navbar({ visible }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-marino/30 bg-blanco/90 px-6 py-2.5 backdrop-blur transition-transform duration-700 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <span className="font-script text-3xl text-marino">{config.iniciales}</span>
      <a
        href="#confirmar"
        className="border border-profundo px-5 py-1.5 font-sans text-sm tracking-widest text-profundo transition-colors hover:bg-profundo hover:text-white"
      >
        Confirmar
      </a>
    </header>
  );
}
