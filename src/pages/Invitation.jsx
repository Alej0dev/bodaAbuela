import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { config } from "../config";
import Cover from "../components/Cover";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Message from "../components/Message";
import Countdown from "../components/Countdown";
import Itinerary from "../components/Itinerary";
import Gifts from "../components/Gifts";
import Location from "../components/Location";
import Rsvp from "../components/Rsvp";
import Footer from "../components/Footer";

export default function Invitation() {
  const [params] = useSearchParams();
  const [open, setOpen] = useState(false);

  const personas = Number(params.get("cupos"));
  const familia = params.get("familia"); // opcional: /?cupos=3&familia=Restrepo Vélez
  const valido = Number.isInteger(personas) && personas >= 1 && personas <= config.maxPersonas;

  useEffect(() => {
    document.body.style.overflow = open ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!valido) return <Navigate to="/enlaces" replace />;

  return (
    <>
      {!open && <Cover onOpen={() => setOpen(true)} personas={personas} familia={familia} />}
      <Navbar visible={open} />
      <main>
        <Hero />
        <Message />
        <Countdown />
        <Itinerary />
        <Gifts />
        <Location />
        <Rsvp personas={personas} familia={familia} />
      </main>
      <Footer />
    </>
  );
}
