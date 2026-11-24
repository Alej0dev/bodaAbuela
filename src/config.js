// ✏️ Edita aquí todos los datos de la invitación.
export const config = {
  novio: "Carlos",
  novia: "Blanca",
  iniciales: "C & B",
  maxPersonas: 10, // se generan las páginas /1, /2 ... /10
  frase: "Dos corazones, una promesa",

  // Fecha y hora de la ceremonia (hora Colombia, UTC-5)
  fechaISO: "2026-12-19T20:00:00-05:00",
  fechaTexto: "Sábado 19 de diciembre 2026",

  mensajeTitulo: "El amor nos reúne para siempre…",
  mensaje:
    "Con inmensa alegría y la bendición de Dios, queremos compartir con ustedes la felicidad de unir nuestras vidas en matrimonio. Nos encantaría contar con su compañía para celebrar este día tan especial y ser testigos del comienzo de nuestro para siempre.",

  itinerario: [
    { hora: "7:00 pm", evento: "Entrada de invitados" },
    { hora: "8:00 pm", evento: "Ceremonia" },
    { hora: "9:00 pm", evento: "Fin de la ceremonia" },
    { hora: "9:30 pm", evento: "Inicia la celebración" },
    { hora: "11:00 pm", evento: "Cena" },
    { hora: "Hasta el amanecer", evento: "Seguimos celebrando" },
  ],

  sobres:
    "Su compañía y alegría son el regalo más grande que nos pueden dar. Si además quieren tener un gesto con nosotros, una «lluvia de sobres» sería muy apreciada.",

  lugar: {
    nombre: "Finca Villa Mendoza",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=3.479829,-76.31661",
    embedUrl: "https://www.google.com/maps?q=3.479829,-76.31661&z=16&output=embed",
  },

  // WhatsApp que recibe las confirmaciones (código de país + número, sin + ni espacios)
  whatsapp: "573128624528",
};
