# assemblyscript-demo

## demo for compiling and debugging AssemblyScript

1. add logic in *assembly/index.ts*

2. run script to build wasm
``` npm
npm run asbuild:untouched
```

3. serve static files
``` python
python ./wasmServer.py
```

4. you can debug in browser now
![wasm_debug_chrome](./images/wasm_debug_chrome.jpg)
