const fs = require("fs");

console.log("[MOCK LOADER] Simulating postinstall lifecycle hook...");

const simulatedPayload =
  'console.log("[MOCK EXPLOIT] Arbitrary code executed via'
  ' Function.constructor.");';
const executor = new Function(simulatedPayload);
executor();

fs.writeFileSync(
  "simulated_leak.txt",
  "MOCK IOC: Simulated credential access for Sentinel Sandbox demo."
);
console.log("[MOCK LOADER] Harmless simulation file generated.");
