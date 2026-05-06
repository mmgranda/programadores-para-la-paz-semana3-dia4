console.log("=== LISTA DE PROPUESTAS COMUNITARIAS ===");

const propuestas = [
  "Huerta urbana",
  "Internet comunitario",
  "Seguridad vecinal",
  "Deportes para jóvenes"
];

console.log("--- Revisión con FOR ---");
for (let i = 0; i < propuestas.length; i++) {
  console.log((i + 1) + ". " + propuestas[i]);
}

console.log("Total: " + propuestas.length + " propuestas registradas");
