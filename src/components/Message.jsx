import { config } from "../config";
import Ornament from "./Ornament";

export default function Message() {
  return (
    <section id="mensaje" className="px-6 py-24 text-center">
      <div className="mx-auto max-w-xl">
        <Ornament />
        <h2 className="mt-6 font-serif text-4xl italic">✦ {config.mensajeTitulo} ✦</h2>
        <p className="mt-8 text-xl leading-9 text-tinta/85">{config.mensaje}</p>
        <p className="mt-10 font-script text-5xl text-marino">{config.fechaTexto}</p>
      </div>
    </section>
  );
}
