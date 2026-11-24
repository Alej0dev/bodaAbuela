import { config } from "../config";
import SectionTitle from "./SectionTitle";

export default function Location() {
  const { nombre, mapsUrl, embedUrl } = config.lugar;
  return (
    <section className="px-6 py-24 text-center">
      <SectionTitle title="Ubicación" subtitle="Todos los caminos conducen a…" />
      <div className="mx-auto max-w-xl">
        <h3 className="font-script text-6xl text-marino">{nombre}</h3>
        <iframe
          title={`Mapa de ${nombre}`}
          src={embedUrl}
          loading="lazy"
          className="mt-8 h-72 w-full border border-marino/60"
        />
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block bg-profundo px-8 py-3 font-sans text-sm tracking-widest text-white transition-colors hover:bg-tinta"
        >
          Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}
