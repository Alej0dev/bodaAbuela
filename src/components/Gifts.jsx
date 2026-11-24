import { config } from "../config";
import SectionTitle from "./SectionTitle";

export default function Gifts() {
  return (
    <section className="bg-celeste px-6 py-24 text-center">
      <SectionTitle title="Lluvia de sobres" light />
      <div className="mx-auto max-w-xl">
        <svg viewBox="0 0 120 80" className="mx-auto w-24" fill="none" stroke="#ffffff" strokeWidth="1.2" aria-hidden="true">
          <rect x="2" y="2" width="116" height="76" />
          <path d="M2 4l58 40 58-40" />
          <path d="M60 62c-12-8-16-16-10-21 4-4 9-2 10 2 1-4 6-6 10-2 6 5 2 13-10 21z" fill="#ffffff" stroke="none" />
        </svg>
        <p className="mt-8 text-xl leading-9 text-white/90">{config.sobres}</p>
        <p className="mt-6 text-xl italic text-white">Su presencia es lo que más esperamos</p>
      </div>
    </section>
  );
}
