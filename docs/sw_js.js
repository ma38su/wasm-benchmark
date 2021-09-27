function sieve(max_count) {
  const primes = new Array(max_count + 1);
  const result = [];
  for (let i = 2; i <= max_count; ++i) {
      primes[i] = true;
  }

  for (let i = 2; i < max_count; ++i) {
      if (!primes[i]) continue;
      result.push(i);
      
      for (let j = i; j <= max_count; j += i) {
          primes[j] = false;
      }
  }
  return result;
}

self.addEventListener('message', (message) => {
  const {input, t0} = message.data;
  self.postMessage({
    input,
    result: sieve(input),
    t0
  });
});
