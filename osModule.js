const os = require('os');

const osInfo = {
  Nombre: os.hostname(),
  Tipo: os.type(),
  Versión: os.version(),
  Arquitectura: os.arch(),
  CPUs: os.cpus().length,
  "Memoria Total": `${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
  "Memoria Libre": `${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
};

console.log("Información del sistema operativo:");
for (const key in osInfo) {
  console.log(`${key}: ${osInfo[key]}`);
}

function getOSInfo() {
}
