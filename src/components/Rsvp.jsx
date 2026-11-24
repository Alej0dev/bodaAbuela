import { config } from "../config";
import { fraseValidez, textoPersonas } from "../utils/invitation";
import SectionTitle from "./SectionTitle";

export default function Rsvp({ personas, familia }) {
  const confirmar = () => {
    const text = `Hola, confirmo mi asistencia a la boda de ${config.novio} y ${config.novia}${
      familia ? ` (Familia ${familia})` : ""
    }. Mi invitación es válida para ${textoPersonas(personas)}.\nNombre(s): `;
    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="confirmar" className="bg-celeste px-6 py-24">
      <SectionTitle title="Por favor confirma tu asistencia" light />
      <div className="mx-auto max-w-md border border-marino/60 bg-blanco px-6 py-10 text-center">
        <p className="text-xl italic text-profundo">{fraseValidez(personas)}</p>
        <p className="mt-2 font-script text-6xl text-marino">{textoPersonas(personas)}</p>
        <button
          onClick={confirmar}
          className="mt-10 w-full bg-profundo py-3 font-sans text-sm tracking-widest text-white transition-colors hover:bg-marino"
        >
          Confirmar asistencia
        </button>
      </div>
    </section>
  );
}
