import { config } from "../config";
import useCountdown from "../hooks/useCountdown";

export default function Countdown() {
  const t = useCountdown(config.fechaISO);
  const items = [
    ["días", t.dias],
    ["horas", t.horas],
    ["minutos", t.minutos],
    ["segundos", t.segundos],
  ];

  return (
    <section className="bg-celeste px-6 py-20 text-center text-white">
      <h2 className="font-serif text-4xl italic">Falta poco para el gran día</h2>
      <div className="mx-auto mt-10 grid max-w-md grid-cols-4 gap-3">
        {items.map(([label, value]) => (
          <div key={label} className="border border-marino/60 bg-blanco py-5 text-tinta">
            <div className="text-4xl font-medium">{String(value).padStart(2, "0")}</div>
            <div className="mt-1 font-sans text-xs text-profundo">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
