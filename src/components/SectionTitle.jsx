import Ornament from "./Ornament";

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className="mb-12 text-center">
      <Ornament light={light} />
      <h2 className={`mt-6 font-serif text-5xl italic ${light ? "text-white" : ""}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-xl italic ${light ? "text-white/80" : "text-profundo"}`}>{subtitle}</p>
      )}
    </div>
  );
}
