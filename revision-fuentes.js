console.log("=== REVISIÓN DE FUENTES ===");

const fuentes = ["Alcaldía", "Líder comunitario", "Universidad", "ONG local"];
let verificadas = 0;

for (let i = 0; i < fuentes.length; i++) {
  console.log("Fuente " + (i + 1) + ": " + fuentes[i] + " - Verificada");
  verificadas++;
}

console.log("Total fuentes: " + verificadas);
console.log("Evitar rumores, usar datos confirmados");
