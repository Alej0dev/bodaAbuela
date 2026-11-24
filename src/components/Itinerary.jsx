import { config } from "../config";
import SectionTitle from "./SectionTitle";

export default function Itinerary() {
  return (
    <section className="px-6 py-24">
      <SectionTitle title="Itinerario" />
      <div className="relative mx-auto max-w-md">
        <span className="absolute bottom-3 left-1/2 top-3 w-px bg-marino/50" />
        {config.itinerario.map(({ hora, evento }) => (
          <div key={hora} className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 pb-8 last:pb-0">
            <p className="text-right text-2xl font-medium">{hora}</p>
            <span className="size-3 rotate-45 border border-marino bg-blanco" />
            <p className="text-xl italic text-tinta/80">{evento}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
