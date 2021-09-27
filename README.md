# wasm-benchmark

Compare between Javascript and WASM / Rust in the processing speed.

The target process is a prime number enumeration by the Eratosthenes sieve algorithm.

## How to build for WASM/Rust

```sh
wasm-pack build --target web
```

## How to run

```sh
python -m http.server
```

After starting the web server, Try following Links:
- [JS - http://localhost:8000/js.html](http://localhost:8000/js.html)
- [WASM/Rust - http://localhost:8000/wasm.html](http://localhost:8000/wasm.html)
