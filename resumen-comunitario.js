console.log("=== RESUMEN COMUNITARIO ===");

const temas = ["Salud", "Educación", "Seguridad", "Ambiente"];
const conteos = [12, 8, 15, 10];

console.log("--- Resumen de participación ---");
for (let i = 0; i < temas.length; i++) {
  console.log(temas[i] + ": " + conteos[i] + " propuestas");
}

console.log("Total temas activos: " + temas.length);
