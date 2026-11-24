import { useState } from "react";
import { config } from "../config";
import { textoPersonas } from "../utils/invitation";

export default function Links() {
  const [copiado, setCopiado] = useState(null);

  const copiar = async (n) => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/?cupos=${n}`);
      setCopiado(n);
      setTimeout(() => setCopiado(null), 1500);
    } catch {
      /* el navegador bloqueó el portapapeles */
    }
  };

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-lg">
        <h1 className="font-script text-6xl text-marino">
          {config.novio} & {config.novia}
        </h1>
        <p className="mt-4 text-xl">
          Un enlace por cada número de personas. Copia el que corresponda y envíaselo al invitado.
        </p>

        <ul className="mt-8 divide-y divide-marino/20 border border-marino/40">
          {Array.from({ length: config.maxPersonas }, (_, i) => i + 1).map((n) => (
            <li key={n} className="flex items-center justify-between gap-3 p-4">
              <div>
                <p className="text-2xl first-letter:uppercase">{textoPersonas(n)}</p>
                <a href={`/?cupos=${n}`} className="font-sans text-sm text-profundo underline">
                  ?cupos={n}
                </a>
              </div>
              <button
                onClick={() => copiar(n)}
                className="border border-profundo px-4 py-2 font-sans text-sm text-profundo transition-colors hover:bg-profundo hover:text-white"
              >
                {copiado === n ? "¡Copiado!" : "Copiar enlace"}
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-sans text-sm text-tinta/70">
          Opcional: añade &familia=Restrepo Vélez al final del enlace para mostrar el nombre de la familia.
        </p>
      </div>
    </main>
  );
}
