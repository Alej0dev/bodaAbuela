// Doble marco fino, como una invitación impresa.
export default function Frame({ light = false }) {
  return (
    <>
      <div className={`pointer-events-none absolute inset-4 border ${light ? "border-white/60" : "border-marino/70"}`} />
      <div className={`pointer-events-none absolute inset-6 border ${light ? "border-white/30" : "border-marino/30"}`} />
    </>
  );
}
