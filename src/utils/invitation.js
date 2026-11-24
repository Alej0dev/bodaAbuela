const palabras = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const textoPersonas = (n) => (n === 1 ? "1 persona" : `${palabras[n] || n} personas`);
export const fraseValidez = (n) => `Esta invitación es válida ${n === 1 ? "solo " : ""}para`;
