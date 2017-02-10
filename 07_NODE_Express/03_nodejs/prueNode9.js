// Pedimos la memoria usada
let mem = process.memoryUsage();
// Calcularlo en Kb
let memKb = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024),
    heapUsed: parseInt(mem.heapUsed / 1024),
    external: parseInt(mem.external / 1024),
}
console.log(memKb);
process.on('exit', (code) => {
  console.log(`Atomarpolculoconcodigo: ${code}`);
});
// Información del entorno de usario
console.log(process.env);
//process.exitCode = 3;
// Tiempo de uso de la CPU
const startUsage = process.cpuUsage();

const now = Date.now();
while (Date.now() - now < 500);
// Tiempo pasado en micro segundos
console.log(process.cpuUsage(startUsage));

process.exit();
