# Invitación de boda · Carlos & Blanca

    npm install
    npm run dev

## Enlaces según el número de personas
- `/?cupos=1` → válida solo para una persona, `/?cupos=2` → dos personas, `/?cupos=3` → tres... hasta `maxPersonas` (en `src/config.js`).
- `/enlaces` → lista con un botón para copiar cada enlace.
- Opcional: `/?cupos=3&familia=Restrepo Vélez` muestra el nombre de la familia.

## Datos
Todo está en `src/config.js` (fecha, textos, itinerario, mapa, WhatsApp). La foto de fondo es `public/fondo.jpg`.

## Publicar
`npm run build` y subir `dist` a Netlify o Vercel.
