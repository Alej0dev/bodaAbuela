import { config } from "../config";
import Ornament from "./Ornament";

export default function Footer() {
  return (
    <footer className="px-6 py-20 text-center">
      <Ornament />
      <p className="mt-8 text-xl italic text-profundo">Gracias por acompañarnos en este día</p>
      <p className="mt-4 font-script text-6xl text-marino">
        {config.novio} & {config.novia}
      </p>
    </footer>
  );
}
