import { wasmBrowserInstantiate } from "./instantiateWasm.js";

const runWasmAdd = async () => {
    // Instantiate our wasm module
    const wasmModule = await wasmBrowserInstantiate("./untouched.wasm");

    // Call the Add function export from wasm, save the result
    const addResult = wasmModule.instance.exports.add(24, 24);

    // Set the result onto the body
    document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasmAdd();