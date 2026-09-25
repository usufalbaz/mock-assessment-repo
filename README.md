# 🧪 Mock Assessment Repository (Sentinel Sandbox Testbed)
### Built for IBM Bob 2.0 Hackathon Demonstration | Team Jinx Security AI

> **⚠️ SECURITY RESEARCH NOTICE:**
> This repository is a **completely sanitized and harmless testbed** built specifically to demonstrate the detection capabilities of **Sentinel Sandbox** during the IBM Bob 2.0 Hackathon.
> It contains **zero real malware** and performs **no unauthorized actions or network exfiltration**.

---

## 🎯 Purpose & Simulated Scenario

This repository simulates a real-world developer recruitment trap:
1. It presents itself as a standard take-home technical assessment for a developer role.
2. The `package.json` includes a simulated `postinstall` lifecycle hook pointing to `scripts/loader.js`.
3. The script harmlessly simulates dynamic execution (`Function.constructor`) and creates a local breadcrumb file (`simulated_leak.txt`) to test runtime detection without causing any system harm.

---

## 🛡️ Intended Usage

This repository is designed to be fed into **Sentinel Sandbox**:
- **Disposable Isolation:** The container executes `npm install` in an isolated environment.
- **Agent Tracing:** IBM Bob 2.0 intercepts the simulated lifecycle script, traces the process, and flags the threat to protect the developer.

---

## ⚖️ License & Ethics

Distributed under the **MIT License**. Strictly created for educational, defensive security research, and hackathon evaluation.
