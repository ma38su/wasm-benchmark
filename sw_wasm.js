import init, {sieve} from "./pkg/sieve_wasm.js";
init().then(() => {
  self.addEventListener('message', (message) => {
    const {input, t0} = message.data;
    self.postMessage({
      type: 'event',
      input,
      result: sieve(input),
      t0
    });
  });

  self.postMessage({
    type: 'load'
  });
});
