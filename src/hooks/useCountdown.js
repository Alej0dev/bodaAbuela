import { useEffect, useState } from "react";

const calc = (target) => {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    dias: Math.floor(diff / 864e5),
    horas: Math.floor((diff / 36e5) % 24),
    minutos: Math.floor((diff / 6e4) % 60),
    segundos: Math.floor((diff / 1e3) % 60),
  };
};

export default function useCountdown(target) {
  const [time, setTime] = useState(() => calc(target));
  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}
