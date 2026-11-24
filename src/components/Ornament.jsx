export default function Ornament({ className = "", light = false }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className={`h-px w-16 bg-gradient-to-r from-transparent ${light ? "to-white" : "to-marino"}`} />
      <span className={`size-2 rotate-45 border ${light ? "border-white" : "border-marino"}`} />
      <span className={`h-px w-16 bg-gradient-to-l from-transparent ${light ? "to-white" : "to-marino"}`} />
    </div>
  );
}
